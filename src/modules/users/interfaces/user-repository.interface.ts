import { User } from '@shared/entities/user.entity'
import { BaseRepositoryInterface } from '@shared/repositories/base/base.interface.repository'

export interface UserRepositoryInterface extends BaseRepositoryInterface<User> {}
