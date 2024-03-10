import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, JoinColumn } from "typeorm"
import { MenuEntity } from "./menu.entity" 

@Entity('catalog_display')
export class DisplayEntity extends BaseEntity {

    @PrimaryGeneratedColumn()
    displayId!: number

    @Column()
    displayName!: string

    @Column()
    displayUrl!: string

    @Column()
    displayIcon!: string

    @ManyToOne(() => MenuEntity, (menuEntity: MenuEntity) => menuEntity.displays)
    @JoinColumn({ name: "menu" })
    menu!: MenuEntity;

    @Column()
    status!: number

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    dateRegister!: Date;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
    dateUpdate!: Date;

}