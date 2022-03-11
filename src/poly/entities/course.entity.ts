import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { TABLES } from '../../consts/tables.const';

@Entity({ name: TABLES.COURSE.name })
export class Course {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100, nullable: false })
  title: string;
}
