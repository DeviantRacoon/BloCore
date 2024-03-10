import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany } from "typeorm"
import { UserEntity } from "./user.entity" 

@Entity('catalog_role')
export class RoleEntity extends BaseEntity {

    @PrimaryGeneratedColumn()
    roleId!: number

    @Column()
    roleName!: string

    @Column()
    status!: number

    @OneToMany(() => UserEntity, (userEntity: UserEntity) => userEntity.role)
    users!: UserEntity[]

    @Column({ type: 'date', default: () => 'CURRENT_TIMESTAMP' })
    dateRegister!: Date;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
    dateUpdate!: Date;

}