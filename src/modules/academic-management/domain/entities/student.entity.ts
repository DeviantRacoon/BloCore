import { Entity, PrimaryGeneratedColumn, Column, OneToOne, ManyToMany, JoinColumn, BaseEntity } from "typeorm"
import { PersonEntity } from "../../../core/domain/entities/person.entity"
import { SubjectEntity } from "./subject.entity"

@Entity('catalog_student')
export class StudentEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    studentId!: number

    @OneToOne(() => PersonEntity)
    @JoinColumn({ name: "person" })
    person!: PersonEntity

    @Column()
    grade!: number

    @ManyToMany(() => SubjectEntity, (subjectEntity) => subjectEntity.students)
    subjects!: SubjectEntity[];

    @Column({ default: 1 })
    status!: number

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    dateRegister!: Date;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
    dateUpdate!: Date;
}
