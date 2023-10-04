import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class BankAccount {
  @Prop({ require: true })
  bankName: string;

  @Prop({ require: true })
  branch: string;

  @Prop({ require: true })
  routingNumber: string;

  @Prop({ require: true })
  accountNumber: string;

  @Prop({ require: true })
  accountName: string;
}

export const BankAccountSchema = SchemaFactory.createForClass(BankAccount);
