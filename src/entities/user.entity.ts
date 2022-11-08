import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import bcrypt from 'bcryptjs'

@Entity('tab_user')
export class User extends BaseEntity{

    @PrimaryGeneratedColumn('uuid', { name: 'tu_id' })
    id: string

    @Column({ name: 'tu_email', unique: true })
    email: string

    @Column({ name: 'tu_password' })
    password: string

    @CreateDateColumn({ name: 'tu_created_at' })
    createdAt: Date

    @UpdateDateColumn({ name: 'tu_updated_at' })
    updatedAt: Date

    hashPassword() {
        this.password = bcrypt.hashSync(this.password, 8)
    }

}