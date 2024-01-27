import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne } from "typeorm"
import { PersonEntity } from "./person.entity"

@Entity('catalog_user')
export class UserEntity extends BaseEntity {

    @PrimaryGeneratedColumn()
    userId!: number

    @Column()
    email!: string

    @Column()
    password!: string

    @Column()
    role!: number

    @ManyToOne(()=> PersonEntity, (personEntity) => personEntity.personId)
    person!: PersonEntity

    @Column({ default: 1 })
    status!: number

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    dateRegister!: Date;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
    dateUpdate!: Date;

}