import { PartialType } from '@nestjs/mapped-types';
import { IsMongoId } from 'class-validator';

import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @IsMongoId()
  public id: string;
}
