import { Injectable, ConflictException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepo: Repository<UserEntity>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<UserEntity> {
    const existingUser = await this.userRepo.findOneBy({
      email: createUserDto.email,
    });
    if (existingUser) {
      throw new ConflictException(
        `The email ${createUserDto.email} is already registered.`,
      );
    }

    const user = this.userRepo.create(createUserDto);

    return this.userRepo.save(user);
  }

  getUsers(): Promise<UserEntity[]> {
    return this.userRepo.find({ relations: ['tasks'] });
  }
}
