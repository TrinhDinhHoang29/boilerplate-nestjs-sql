import { User } from '@src/core/entities/user.entity'
import { IBaseRepository } from '@src/core/repositories/base/base.interface.repository'

export interface IUserRepository extends IBaseRepository<User> {}
