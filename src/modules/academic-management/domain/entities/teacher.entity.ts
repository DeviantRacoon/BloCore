import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, BaseEntity, ManyToMany } from "typeorm"
import { PersonEntity } from "../../../core/domain/entities/person.entity"
import { SubjectEntity } from "./subject.entity"

@Entity('catalog_teacher')
export class TeacherEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    teacherId!: number

    @OneToOne(()=>PersonEntity)
    @JoinColumn({name:"person"})
    person!: PersonEntity

    @ManyToMany(() => SubjectEntity, (subjectEntity) => subjectEntity.teachers)
    subjects!: SubjectEntity[];

    @Column({default: 1})
    status!: number

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    dateRegister!: Date;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
    dateUpdate!: Date;

}
