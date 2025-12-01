import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  Logger,
  PipeTransform,
} from '@nestjs/common'
import { isUUID } from 'class-validator'

@Injectable()
export class ParseMongoIdPipe implements PipeTransform<string> {
  logger = new Logger(ParseMongoIdPipe.name)
  transform(value: string, _metadata: ArgumentMetadata): string {
    // NOTICE: ROUTE PIPE
    this.logger.log('===TRIGGER ROUTE PARAMS PIPE===')
    if (!isUUID(value)) {
      throw new BadRequestException('Invalid ID')
    }
    return value
  }
}
