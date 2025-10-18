import { BaseEntity } from '@shared//entities/base/base.entity'
import { Project } from '@src/shared/entities/project.entity'
import { User } from '@src/shared/entities/user.entity'
import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm'

// Định nghĩa Enum cho trạng thái task
export enum TaskStatus {
  TODO = 'TODO', // Cần làm
  IN_PROGRESS = 'IN_PROGRESS', // Đang tiến hành
  DONE = 'DONE', // Hoàn thành
  BLOCKED = 'BLOCKED', // Bị chặn
}

@Entity('tasks')
export class Task extends BaseEntity {
  // Tiêu đề tác vụ
  @Column({ length: 255 })
  title: string

  // Mô tả chi tiết tác vụ
  @Column({ type: 'text', nullable: true })
  description: string | null

  // Trạng thái của tác vụ (sử dụng Enum)
  @Column({
    type: 'enum',
    enum: TaskStatus,
    default: TaskStatus.TODO,
  })
  status: TaskStatus

  // Mức độ ưu tiên (có thể là một số từ 1-5, hoặc enum)
  @Column({ type: 'int', default: 3 }) // 1: Cao nhất, 5: Thấp nhất
  priority: number

  // Ngày đến hạn
  @Column({ name: 'due_date', type: 'date', nullable: true })
  dueDate: Date | null

  // Mối quan hệ: Task thuộc về Project nào
  @ManyToOne(() => Project, (project) => project.tasks, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'project_id' })
  project: Project

  @Column({ name: 'project_id' })
  projectId: string

  // Mối quan hệ: Người được giao việc
  @ManyToOne(() => User, (user) => user.assignedTasks, { nullable: true, onDelete: 'SET NULL' })
  @JoinColumn({ name: 'assignee_id' })
  assignee: User | null

  @Column({ name: 'assignee_id', nullable: true })
  assigneeId: string | null
}
