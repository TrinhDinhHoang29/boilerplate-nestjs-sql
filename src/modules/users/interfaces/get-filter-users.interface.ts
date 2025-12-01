import { FindAllResponse } from '@shared/types/common.type'
import { User } from '@src/core/entities/user.entity'

export interface IGetFilterUsersService {
  execute: (limit: number) => Promise<FindAllResponse<User>>
}
