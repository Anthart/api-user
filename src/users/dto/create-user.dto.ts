import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ example: 'Anthony Arteaga' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: 'anthony@mail.com' })
  @IsEmail()
  email: string;
}
