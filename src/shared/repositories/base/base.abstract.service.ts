import { FindAllResponse } from 'src/types/common.type'
import { BaseServiceInterface } from './base.interface.service'
import { BaseEntity } from '@shared/entities/base/base.entity'
import { BaseRepositoryInterface } from '@shared/repositories/base/base.interface.repository'
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity.js'

export abstract class BaseServiceAbstract<T extends BaseEntity> implements BaseServiceInterface<T> {
  private readonly repository: BaseRepositoryInterface<T>

  constructor(repository: BaseRepositoryInterface<T>) {
    this.repository = repository
  }

  async create(createDto: T): Promise<T> {
    return await this.repository.create(createDto)
  }

  async findAll(filter: object, options?: object): Promise<FindAllResponse<T | null>> {
    return await this.repository.findAll(filter, options)
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
