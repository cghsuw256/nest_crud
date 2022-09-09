import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';
import { Todo } from '@prisma/client';

@Injectable()
export class TodoService {
  constructor(private prismaService: PrismaService) {}

  async fetchAllTodos(): Promise<Todo[]> {
    return this.prismaService.todo.findMany();
  }

  async fetchTodoItem(id: number): Promise<Todo | null> {
    return this.prismaService.todo.findUnique({
      where: { id: Number(id) },
    });
  }

  async deleteTodoItem(id: number): Promise<Todo> {
    return this.prismaService.todo.delete({ where: { id: Number(id) } });
  }

  async addTodoItem(data: Todo): Promise<Todo> {
    return this.prismaService.todo.create({ data });
  }
}
