const { Entity, Column, PrimaryGeneratedColumn } = require('typeorm');


export enum Status{
  NEGATIVE = 'negative',
  POSITIVE = 'positive',
}


@Entity()
export class RoomType {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  price: string;

  @Column({
    type: "enum",
    enum: Status,
    default: Status.POSITIVE
  })
  status: string;
}