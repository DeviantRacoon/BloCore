import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, BaseEntity } from "typeorm"
import { StudentEntity } from "./student.entity"
import { TeacherEntity } from "./teacher.entity"

@Entity('catalog_subject')
export class SubjectEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    subjectId!: number

    @Column()
    nameSubject!: string

    @Column()
    grade!: number

    @ManyToMany(() => StudentEntity, (studentEntity) => studentEntity.subjects)
    @JoinTable({
        name: 'catalog_charge_student',
        joinColumn: { name: 'subjectId' }, 
        inverseJoinColumn: { name: 'studentId' }
    })
    students!: StudentEntity[]

    @ManyToMany(() => TeacherEntity, (teacherEntity) => teacherEntity.subjects)
    @JoinTable({
        name: 'catalog_charge_teacher',
        joinColumn: { name: 'subjectId' }, 
        inverseJoinColumn: { name: 'teacherId' }
    })
    teachers!: TeacherEntity[]

    @Column({ default: 1 })
    status!: number

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    dateRegister!: Date;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
    dateUpdate!: Date;

}
