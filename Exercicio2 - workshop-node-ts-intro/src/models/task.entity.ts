import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity() //marcando que o que for criado na sequência é entidade
export default class Task extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number

  @Column()
  title!: string

  @Column({default: false})
  completed!: boolean
}