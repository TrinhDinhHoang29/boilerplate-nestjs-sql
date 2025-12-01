import { IGetFilterUsersService } from '@modules/users/interfaces/get-filter-users.interface'
import type { IUserRepository } from '@modules/users/interfaces/user-repository.interface'
import { USER_REPOSITORY } from '@modules/users/tokens'
import { Inject, Query } from '@nestjs/common'
import { FindAllResponse } from '@shared/types/common.type'
import { User } from '@src/core/entities/user.entity'
import { BaseServiceAbstract } from '@src/core/repositories/base/base.abstract.service'

export class GetFilterUsersService
  extends BaseServiceAbstract<User>
  implements IGetFilterUsersService
{
  constructor(@Inject(USER_REPOSITORY) repository: IUserRepository) {
    super(repository)
  }
  async execute(limit: number): Promise<FindAllResponse<User>> {
    console.log('limit: ', limit)
    const result = await this.findAll({})
    return result
  }
}
