import { Injectable, NotFoundException } from '@nestjs/common';
import { TaskEntity } from './tasks.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTaskDto } from './dto/create-task.dto';
import { UserEntity } from 'src/users/user.entity';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(TaskEntity)
    private readonly taskRepo: Repository<TaskEntity>,
    @InjectRepository(UserEntity)
    private readonly userRepo: Repository<UserEntity>,
  ) {}

  async create(
    userId: number,
    createTaskDto: CreateTaskDto,
  ): Promise<TaskEntity> {
    const user = await this.userRepo.findOneBy({ id: userId });
    if (!user) {
      throw new NotFoundException(`User with ID ${userId} not found`);
    }

    const task = this.taskRepo.create({
      ...createTaskDto,
      user,
    });

    return await this.taskRepo.save(task);
  }
}
