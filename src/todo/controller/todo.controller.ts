import {
  Body,
  Controller,
  Delete,
  Get,
  Put,
  Param,
  Post,
} from '@nestjs/common';
import { TodoService } from '../service/todo.service';
import { Todo } from '@prisma/client';

@Controller('api/v1/todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  async getAllTodos(): Promise<Todo[]> {
    return this.todoService.getAllTodos();
  }

  @Get(':id')
  async getTodoItem(@Param('id') id: number): Promise<Todo | null> {
    return this.todoService.getTodoItem(id);
  }

  @Delete(':id')
  async deleteTodoItem(@Param('id') id: number): Promise<Todo> {
    return this.todoService.deleteTodoItem(id);
  }

  @Post()
  async addTodoItem(@Body() data: Todo): Promise<Todo> {
    return this.todoService.addTodoItem(data);
  }

  @Put(':id')
  async updateTodoItem(
    @Param('id') id: number,
    @Body() data: Todo
  ): Promise<Todo | null> {
    return this.todoService.updateTodoItem(id, data.title, data.content, data.is_done);
  }
}
