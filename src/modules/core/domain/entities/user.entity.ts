import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, JoinColumn } from "typeorm"
import { PersonEntity } from "./person.entity"

@Entity('catalog_user')
export class UserEntity extends BaseEntity {

    @PrimaryGeneratedColumn()
    userId!: number

    @Column()
    username!: string

    @Column()
    password!: string

    @Column({ default: null })
    role!: number

    @ManyToOne(() => PersonEntity, (personEntity) => personEntity.users)
    @JoinColumn({ name: "personId" })
    person!: PersonEntity;

    @Column()
    status!: number

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    dateRegister!: Date;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
    dateUpdate!: Date;

}