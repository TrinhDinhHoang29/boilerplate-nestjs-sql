import { Global, Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { EnvConfigService } from '@src/configs/services/env-config.service'
import Joi from 'joi'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        NODE_ENV: Joi.string()
          .valid('development', 'production', 'test', 'provition', 'staging')
          .default('development'),
        PORT: Joi.number().default(8080),
      }),
      envFilePath: process.env.NODE_ENV === 'development' ? '.env.dev' : '.env',
      expandVariables: true,
      cache: true,
    }),
  ],
  providers: [EnvConfigService],
  exports: [EnvConfigService],
})
@Global()
export class EnvConfigModule {}
