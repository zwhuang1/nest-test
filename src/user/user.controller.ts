import { Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { ConfigService } from '@nestjs/config';
import { ConstEnum } from 'src/enum/const';

@Controller('user')
export class UserController {
  constructor(
    private userService: UserService,
    private configService: ConfigService,
  ) {}

  @Get('config')
  getConfig(): any {
    const db = this.configService.get<{
      host: string;
      port: number;
      username: string;
      password: string;
      database: string;
    }>(ConstEnum.DB);
    console.log(db, 'db');
    console.log(this.configService.get(ConstEnum.DB), 'DB');
    return {
      code: 0,
      message: 'success',
      data: db,
    };
  }

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
