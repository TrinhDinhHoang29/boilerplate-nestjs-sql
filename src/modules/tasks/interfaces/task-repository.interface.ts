import { Task } from '@src/core/entities/task.entity'
import { IBaseRepository } from '@src/core/repositories/base/base.interface.repository'

export interface ITaskRepository extends IBaseRepository<Task> {}
