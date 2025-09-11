import { Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  getUsers(): any {
    // return {
    //   code: 0,
    //   message: 'success',
    //   data: [
    //     {
    //       id: 1,
    //       name: 'John Doe',
    //       email: 'john.doe@example.com',
    //     },
    //   ],
    // };
    return this.userService.getUsers();
  }

  @Post('add')
  addUser(): any {
    // return {
    //   code: 0,
    //   message: '添加用户成功',
    //   data: {},
    // };
    return this.userService.addUser();
  }
}
