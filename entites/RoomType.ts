const { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn,  VersionColumn } = require('typeorm');


export enum Status{
  NEGATIVE = 'negative',
  POSITIVE = 'positive',
}


@Entity()
export class RoomType {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @Column()
  value: string;

  @Column()
  userId: number;

  // 是否启用后续更改
  @Column()
  price: number;

  @Column({
    type: "enum",
    enum: Status,
    default: Status.POSITIVE
  })
  status: string;

  @CreateDateColumn()
  createdDate: Date;

  @UpdateDateColumn()
  updatedDate: Date;

  @VersionColumn()
  version: number;
}