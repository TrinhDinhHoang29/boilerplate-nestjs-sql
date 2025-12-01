import { BaseEntity } from '@src/core/entities/base/base.entity'
import { Task } from '@src/core/entities/task.entity'
import { User } from '@src/core/entities/user.entity'
import { Entity, Column, ManyToOne, OneToMany, JoinColumn } from 'typeorm'

@Entity('projects')
export class Project extends BaseEntity {
  // Tên dự án
  @Column({ length: 255 })
  name: string

  // Mô tả dự án
  @Column({ type: 'text', nullable: true })
  description: string | null

  // Mối quan hệ: Chủ sở hữu dự án (ManyToOne: nhiều dự án thuộc về một người dùng)
  @ManyToOne(() => User, (user) => user.projects, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'owner_id' })
  owner: User

  @Column({ name: 'owner_id' })
  ownerId: string

  // Mối quan hệ: Các tác vụ trong dự án (OneToMany: một dự án có nhiều tác vụ)
  @OneToMany(() => Task, (task) => task.project)
  tasks: Task[]
}
