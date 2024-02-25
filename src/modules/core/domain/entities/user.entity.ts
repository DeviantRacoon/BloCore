import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, JoinColumn, OneToOne } from "typeorm"
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

    @OneToOne(() => RoleEntity)
    @JoinColumn({ name: "role" })
    role!: RoleEntity

    @ManyToOne(() => PersonEntity, (personEntity: PersonEntity) => personEntity.users)
    @JoinColumn({ name: "person" })
    person!: PersonEntity;

    @Column()
    status!: number

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    dateRegister!: Date;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
    dateUpdate!: Date;

}