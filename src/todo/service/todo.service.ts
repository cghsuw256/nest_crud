import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';
import { Todo } from '@prisma/client';

@Injectable()
export class TodoService {
  constructor(private prismaService: PrismaService) {}

  async getAllTodos(): Promise<Todo[]> {
    return this.prismaService.todo.findMany();
  }

  async getTodoItem(id: number): Promise<Todo | null> {
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

  async updateTodoItem(
    id: number,
    title: string,
    content: string,
    is_done: boolean,
  ): Promise<Todo> {
    return this.prismaService.todo.update({
      where: { id: Number(id) },
      data: {
        title,
        content,
        is_done,
      },
    });
  }
}
