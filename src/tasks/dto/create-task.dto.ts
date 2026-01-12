import { IsNotEmpty, IsString, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateTaskDto {
  @ApiProperty({ example: 'Send Email' })
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  title: string;
}
