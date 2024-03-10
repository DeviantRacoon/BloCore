import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, JoinColumn, OneToMany } from "typeorm"
import { DisplayEntity } from "./display.entity" 

@Entity('catalog_menu')
export class MenuEntity extends BaseEntity {

    @PrimaryGeneratedColumn()
    menuId!: number

    @Column()
    menuName!: string

    @Column()
    menuIcon!: string

    @Column()
    status!: number

    @Column({ type: 'date', default: () => 'CURRENT_TIMESTAMP' })
    dateRegister!: Date;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
    dateUpdate!: Date;

    @OneToMany(() => DisplayEntity, (displayEntity: DisplayEntity) => displayEntity.menu)
    displays!: DisplayEntity[]
}