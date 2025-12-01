import type { IGetFilterUsersService } from '@modules/users/interfaces/get-filter-users.interface'
import { GET_FILTER_USERS } from '@modules/users/tokens'
import { Controller, Get, Inject, Query } from '@nestjs/common'

@Controller({
  path: 'users',
  version: '1',
})
export class UserControllerV1 {
  constructor(@Inject(GET_FILTER_USERS) private readonly getFilterUsers: IGetFilterUsersService) {}

  @Get()
  async getAll(@Query('limit') limit: number) {
    const data = await this.getFilterUsers.execute(limit)

    return {
      ...data,
    }
  }
}
