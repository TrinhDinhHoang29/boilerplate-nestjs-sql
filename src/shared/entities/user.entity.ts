import { BaseEntity } from '@shared//entities/base/base.entity'
import { Project } from '@src/shared/entities/project.entity'
import { Task } from '@src/shared/entities/task.entity'
import { Entity, Column, OneToMany } from 'typeorm'

@Entity('users')
export class User extends BaseEntity {
  // Tên hiển thị của người dùng
  @Column({ name: 'display_name', length: 100 })
  displayName: string

  // Địa chỉ email (thường là unique và được dùng để đăng nhập)
  @Column({ unique: true, length: 150 })
  email: string

  // Mật khẩu đã được hash
  @Column({ select: false }) // Không tự động chọn trường này khi tải user
  passwordHash: string

  // Mối quan hệ: Một người dùng có thể tạo nhiều dự án
  @OneToMany(() => Project, (project) => project.owner)
  projects: Project[]

  // Mối quan hệ: Một người dùng có thể được gán nhiều task
  @OneToMany(() => Task, (task) => task.assignee)
  assignedTasks: Task[]

  // Constructor đơn giản
  constructor(partial: Partial<User>) {
    super()
    Object.assign(this, partial)
  }
}
