import { UserModule } from '@modules/users/user.module'
import { Module } from '@nestjs/common'
import { EnvConfigModule } from '@src/infrastructures/configs/env-config.module'
import { DatabaseModule } from '@src/infrastructures/database/database.module'

@Module({
  imports: [EnvConfigModule, DatabaseModule, UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
