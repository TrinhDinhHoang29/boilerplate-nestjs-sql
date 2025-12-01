import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'

@Injectable()
export class EnvConfigService {
  constructor(private readonly configService: ConfigService) {}

  // #region: POSTGRES config

  get databaseConfig() {
    return {
      host: this.getString('POSTGRES_HOST'),
      port: this.getNumber('POSTGRES_PORT'),
      username: this.getString('POSTGRES_USER'),
      password: this.getString('POSTGRES_PASSWORD'),
      database: this.getString('POSTGRES_NAME'),
    }
  }

  // #endregion

  // #religion: Config

  get port(): number {
    return this.getNumber('PORT')
  }

  get globalPrefix(): string {
    return this.getString('GLOBAL_PREFIX')
  }

  //#endreligion

  // #region: get method

  private getNumber(key: string): number {
    const value = this.get(key)

    try {
      return Number(value)
    } catch {
      throw new Error(`${key} environment variable is not a number`)
    }
  }

  private getBoolean(key: string): boolean {
    const value = this.get(key)

    try {
      return Boolean(JSON.parse(value))
    } catch {
      throw new Error(`${key} env var is not a boolean`)
    }
  }

  private getString(key: string): string {
    const value = this.get(key)

    return value.replaceAll(String.raw`\n`, '\n')
  }

  private get(key: string): string {
    const value = this.configService.get<string>(key)

    if (value == null) {
      throw new Error(`${key} environment variable does not set`)
    }

    return value
  }
  // #endregion
}
