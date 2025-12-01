import { UserControllerV1 } from '@modules/users/controllers/v1/user.controller'
import { UserProviders } from '@modules/users/providers/user.provider'
import { userTokens } from '@modules/users/tokens'
import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { User } from '@src/core/entities/user.entity'

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UserControllerV1],
  providers: [...UserProviders],
  exports: [...userTokens],
})
export class UserModule {}
