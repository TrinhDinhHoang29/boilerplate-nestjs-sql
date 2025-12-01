import { FindAllResponse } from '@shared/types/common.type'
import { FindOptionsWhere } from 'typeorm'
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity.js'

export interface IBaseRepository<T> {
  create(dto: T): Promise<T>

  findOneById(id: string, projection?: string): Promise<T | null>

  findOneByCondition(condition?: FindOptionsWhere<T>, projection?: string): Promise<T | null>

  findAll(condition: object, options?: object): Promise<FindAllResponse<T>>

  update(id: string, dto: QueryDeepPartialEntity<T>): Promise<T | null>

  softDelete(id: string): Promise<boolean>

  permanentlyDelete(id: string): Promise<boolean>
}
