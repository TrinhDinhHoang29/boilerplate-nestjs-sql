import { BaseEntity } from '@shared/entities/base/base.entity'
import { BaseRepositoryInterface } from '@shared/repositories/base/base.interface.repository'
import { Repository, FindOptionsWhere } from 'typeorm'
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity.js'

export abstract class BaseRepositoryAbstract<T extends BaseEntity>
  implements BaseRepositoryInterface<T>
{
  protected readonly repository: Repository<T>

  constructor(repository: Repository<T>) {
    this.repository = repository
  }

  async create(dto: T): Promise<T> {
    const entity = this.repository.create(dto)
    return this.repository.save(entity)
  }

  async findOneById(id: string): Promise<T | null> {
    return this.repository.findOne({
      where: { id } as FindOptionsWhere<T>,
    })
  }

  async findOneByCondition(condition: FindOptionsWhere<T>): Promise<T | null> {
    return this.repository.findOne({ where: condition })
  }

  async findAll(condition: FindOptionsWhere<T>): Promise<{ count: number; items: T[] }> {
    const [items, count] = await this.repository.findAndCount({
      where: condition,
    })
    console.log(items)
    return { count, items }
  }

  async update(id: string, dto: QueryDeepPartialEntity<T>): Promise<T | null> {
    await this.repository.update(id, dto)
    return this.findOneById(id)
  }

  async softDelete(id: string): Promise<boolean> {
    const result = await this.repository.softDelete(id)
    return result.affected !== 0
  }

  async permanentlyDelete(id: string): Promise<boolean> {
    const result = await this.repository.delete(id)
    return result.affected !== 0
  }
}
