import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne } from "typeorm"

@Entity('catalog_person')
export class PersonEntity extends BaseEntity{
    @PrimaryGeneratedColumn()
    personId!: number

    @Column()
    firstName!: string

    @Column({nullable: true})
    secondName!: string

    @Column()
    lastName!: string

    @Column()
    secondLastName!: string

    @Column() 
    age!: number

    @Column({default: 1})
    status!: number

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    dateRegister!: Date;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
    dateUpdate!: Date;

}