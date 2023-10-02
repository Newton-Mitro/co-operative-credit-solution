import { ClientSession, Connection } from 'mongoose';

export const mongooseTransactionHandler = async <T = any>(
  method: (session: ClientSession) => Promise<T>,
  onError: (error: any) => any,
  connection: Connection,
  session?: ClientSession,
): Promise<T> => {
  const isSessionFurnished = session === undefined ? false : true;
  if (isSessionFurnished === false) {
    session = await connection.startSession();
    session.startTransaction();
  }

  let error;
  let result: T;
  try {
    result = await method(session);

    if (isSessionFurnished === false) {
      await session.commitTransaction();
    }
  } catch (err) {
    error = err;
    if (isSessionFurnished === false) {
      await session.abortTransaction();
    }
  } finally {
    if (isSessionFurnished === false) {
      await session.endSession();
    }

    if (error) {
      onError(error);
    }

    return result;
  }
};
