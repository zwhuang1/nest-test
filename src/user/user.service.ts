import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
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

  addUser(): any {
    // Logic to add a user would go here
    return {
      code: 0,
      message: '添加用户成功',
      data: {},
    };
  }
}
