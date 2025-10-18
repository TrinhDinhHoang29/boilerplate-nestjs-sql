import { UserRepositoryInterface } from '@modules/users/interfaces/user-repository.interface'
import { InjectRepository } from '@nestjs/typeorm'
import { User } from '@shared/entities/user.entity'
import { BaseRepositoryAbstract } from '@shared/repositories/base/base.abstract.repository'
import { Repository } from 'typeorm'

export class UserRepository
  extends BaseRepositoryAbstract<User>
  implements UserRepositoryInterface
{
  constructor(
    @InjectRepository(User)
    repository: Repository<User>,
  ) {
    super(repository)
  }
}
