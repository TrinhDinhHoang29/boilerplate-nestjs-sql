import type { UserRepositoryInterface } from '@modules/users/interfaces/user-repository.interface'
import { Inject, Injectable } from '@nestjs/common'
import { User } from '@shared/entities/user.entity'
import { BaseServiceAbstract } from '@shared/repositories/base/base.abstract.service'

@Injectable()
export class UserService extends BaseServiceAbstract<User> {
  constructor(@Inject('UserRepositoryInterface') private userRepository: UserRepositoryInterface) {
    super(userRepository)
  }

  async getAllUsers() {
    const result = await this.userRepository.findAll({})
    return result
  }
}
