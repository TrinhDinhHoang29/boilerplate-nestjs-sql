import { UserModule } from '@modules/users/user.module'
import { Module } from '@nestjs/common'
import { EnvConfigModule } from '@src/configs/env-config.module'
import { DatabaseModule } from '@src/shared/database/database.module'

@Module({
  imports: [EnvConfigModule, DatabaseModule, UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
