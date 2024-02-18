import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm"

@Entity('catalog_role')
export class RoleEntity extends BaseEntity {

    @PrimaryGeneratedColumn()
    roleId!: number

    @Column()
    roleName!: string

    @Column()
    status!: number

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    dateRegister!: Date;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
    dateUpdate!: Date;

}