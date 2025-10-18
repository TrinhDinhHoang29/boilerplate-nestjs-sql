import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { EnvConfigModule } from '@src/configs/env-config.module'
import { TypeormConfigService } from '@src/shared/database/services/typeorm-config.service'
@Module({
  imports: [
    EnvConfigModule,
    TypeOrmModule.forRootAsync({
      useClass: TypeormConfigService,
    }),
  ],
  providers: [TypeormConfigService],
  exports: [TypeormConfigService],
})
export class DatabaseModule {}
