import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import Joi from 'joi'
import { DatabaseConfig } from 'src/configs/configuration.config'

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
      load: [DatabaseConfig],
      expandVariables: true,
      cache: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
