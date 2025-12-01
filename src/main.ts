import { NestFactory } from '@nestjs/core'
import { AppModule } from '@src/app.module'
import { Logger, VersioningType } from '@nestjs/common' // Import cần thiết
import { EnvConfigService } from '@src/infrastructures/configs/services/env-config.service'
import { LoggingInterceptor } from '@src/common/interceptors/logging.interceptor'
import { CustomValidationPipe } from '@src/common/pipes/custom-validation.pipe'
import { HttpExceptionFilter } from '@src/common/filters/http-exception.filter'
import { NextFunction } from 'express'

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule)
  const logger = new Logger('MAIN')

  const envService = app.get(EnvConfigService)

  app.setGlobalPrefix(envService.globalPrefix)

  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: '1',
  })
  app.useGlobalInterceptors(new LoggingInterceptor())
  app.useGlobalPipes(new CustomValidationPipe())
  app.useGlobalFilters(new HttpExceptionFilter()) // Thêm vào đây

  app.use((_req: Request, _res: Response, next: NextFunction) => {
    logger.debug('===TRIGGER GLOBAL MIDDLEWARE===')
    next()
  })
  console.log('server running on port 8080')
  await app.listen(envService.port)
}

void bootstrap()
