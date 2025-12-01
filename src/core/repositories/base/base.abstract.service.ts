import { FindAllResponse } from '@shared/types/common.type'
import { BaseServiceInterface } from './base.interface.service'
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity.js'
import { BaseEntity } from '@src/core/entities/base/base.entity'
import { IBaseRepository } from '@src/core/repositories/base/base.interface.repository'

export abstract class BaseServiceAbstract<T extends BaseEntity> implements BaseServiceInterface<T> {
  constructor(private readonly repository: IBaseRepository<T>) {}

  async create(createDto: T): Promise<T> {
    return await this.repository.create(createDto)
  }

  async findAll(filter: object, options?: object): Promise<FindAllResponse<T>> {
    const result = await this.repository.findAll(filter, options)
    return result
  }
  async findOne(id: string) {
    return await this.repository.findOneById(id)
  }

  async update(id: string, updateDto: QueryDeepPartialEntity<T>): Promise<T | null> {
    return await this.repository.update(id, updateDto)
  }

  async remove(id: string) {
    return await this.repository.softDelete(id)
  }
}
