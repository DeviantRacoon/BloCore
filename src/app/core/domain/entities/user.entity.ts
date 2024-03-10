import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, JoinColumn } from "typeorm"
import { PersonEntity } from "./person.entity"
import { RoleEntity } from "./role.entity" 

@Entity('catalog_user')
export class UserEntity extends BaseEntity {

    @PrimaryGeneratedColumn()
    userId!: number

    @Column()
    username!: string

    @Column()
    email!: string

    @Column()
    password!: string

    @ManyToOne(() => PersonEntity, (personEntity: PersonEntity) => personEntity.users)
    @JoinColumn({ name: "person" })
    person!: PersonEntity;

    @ManyToOne(() => RoleEntity, (roleEntity: RoleEntity) => roleEntity.users)
    @JoinColumn({ name: "role" })
    role!: RoleEntity;

    @Column()
    status!: number

    @Column({ type: 'date', default: () => 'CURRENT_TIMESTAMP' })
    dateRegister!: Date;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
    dateUpdate!: Date;

}