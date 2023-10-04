import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { Relationship } from '../enums/relationship.enum';

export class FamilyAndRelativeDTO {
  @IsString()
  @IsNotEmpty()
  familyAndRelative: string;

  @IsEnum(Relationship)
  @IsNotEmpty()
  relationship: Relationship;
}
