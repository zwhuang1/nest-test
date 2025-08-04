import { Controller, Get } from '@nestjs/common';

@Controller('user')
export class UserController {
  @Get()
  getUsers(): any {
    return {
      code: 0,
      message: 'success',
      data: [
        {
          id: 1,
          name: 'John Doe',
          email: 'john.doe@example.com',
        },
      ],
    };
  }
}
