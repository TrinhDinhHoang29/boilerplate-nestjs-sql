import { Injectable } from '@nestjs/common'
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm'
import { EnvConfigService } from '@src/configs/services/env-config.service'
import * as path from 'path'

@Injectable()
export class TypeormConfigService implements TypeOrmOptionsFactory {
  constructor(private readonly envConfigService: EnvConfigService) {}
  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'postgres',
      ...this.envConfigService.databaseConfig,
      entities: [path.join(__dirname, '../../entities/*.entity{.ts,.js}')],
      synchronize: true,
    }
  }
}
