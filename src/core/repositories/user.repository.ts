import { IUserRepository } from '@modules/users/interfaces/user-repository.interface'
import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { User } from '@src/core/entities/user.entity'
import { BaseRepositoryAbstract } from '@src/core/repositories/base/base.abstract.repository'

import { Repository } from 'typeorm'

@Injectable()
export class UserRepository extends BaseRepositoryAbstract<User> implements IUserRepository {
  constructor(
    @InjectRepository(User)
    repository: Repository<User>,
  ) {
    super(repository)
  }
}
