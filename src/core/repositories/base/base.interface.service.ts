import { FindAllResponse } from '@shared/types/common.type'
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity.js'

export interface Write<T> {
  create(item: T): Promise<T>
  update(id: string, item: QueryDeepPartialEntity<T>): Promise<T | null>
  remove(id: string): Promise<boolean>
}

export interface Read<T> {
  findAll(filter?: object, options?: object): Promise<FindAllResponse<T>>
  findOne(id: string): Promise<T | null>
}

export interface BaseServiceInterface<T> extends Write<T>, Read<T> {}
