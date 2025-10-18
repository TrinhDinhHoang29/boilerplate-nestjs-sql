import { UserService } from '@modules/users/services/user.service'
import { Controller, Get } from '@nestjs/common'

@Controller({
  path: 'users',
  version: '1',
})
export class UserControllerV1 {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getAll() {
    const data = await this.userService.getAllUsers()
    return {
      ...data,
    }
  }
}
