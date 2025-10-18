import { UserControllerV1 } from '@modules/users/controllers/v1/user.controller'
import { UserService } from '@modules/users/services/user.service'
import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { User } from '@shared/entities/user.entity'
import { UserRepository } from '@shared/repositories/user.repository'

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UserControllerV1],
  providers: [UserService, { provide: 'UserRepositoryInterface', useClass: UserRepository }],
  exports: [UserService],
})
export class UserModule {}
