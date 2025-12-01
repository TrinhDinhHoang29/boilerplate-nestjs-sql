import { GetFilterUsersService } from '@modules/users/services/get-filter-users.service'
import { GET_FILTER_USERS, USER_REPOSITORY } from '@modules/users/tokens'
import { Provider } from '@nestjs/common'
import { UserRepository } from '@src/core/repositories/user.repository'

export const UserProviders: Provider[] = [
  {
    provide: USER_REPOSITORY,
    useClass: UserRepository,
  },
  {
    provide: GET_FILTER_USERS,
    useClass: GetFilterUsersService,
  },
]
