import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('tab_user')
export class User extends BaseEntity{

    @PrimaryGeneratedColumn('uuid', {
        name: 'tu_id'
    })
    id: string

    @Column({
        name: 'tu_name'
    })
    name: string

    @Column({
        name: 'tu_age',
        type: 'int'
    })
    age: number

    @Column({
        name: 'tu_weight',
        type: 'numeric',
        precision: 5,
        scale: 2
    })
    weight: number

    @CreateDateColumn({
        name: 'tu_created_at'
    })
    createdAt: Date

    @UpdateDateColumn({
        name: 'tu_updated_at'
    })
    updatedAt: Date

}