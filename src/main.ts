import { NestFactory } from '@nestjs/core'
import { AppModule } from '@src/app.module'
import { EnvConfigService } from '@src/configs/services/env-config.service'
import { VersioningType } from '@nestjs/common' // Import cần thiết

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule)

  const envService = app.get(EnvConfigService)

  app.setGlobalPrefix(envService.globalPrefix)

  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: '1',
  })

  await app.listen(envService.port)
}

void bootstrap()
