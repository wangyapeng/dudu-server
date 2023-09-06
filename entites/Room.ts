import { Generated, JoinColumn, ManyToOne, OneToOne } from "typeorm";
import { RoomType } from "./RoomType";

const { Entity, Column, GeneratedColumn, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn,  VersionColumn } = require('typeorm');


export enum Status{
  NEGATIVE = '',
  POSITIVE = 'positive',
}


@Entity()
export class Room {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  @Generated("uuid")
  uuid: number;

  @Column()
  name: string;

  @Column()
  userId: number;

  @Column({default: 0})
  tenantId: number;

  @Column({default: ""})
  domainName: string;

  @Column({default: ""})
  bookCode: string;

  // 是否启用后续更改
  @Column()
  price: number;

  // 是否启用后续更改
  //@ts-ignore
  @ManyToOne(type => RoomType)
  @JoinColumn()
  roomType: RoomType;

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