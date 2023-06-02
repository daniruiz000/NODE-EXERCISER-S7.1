import {
  Entity, // Para hacer entidades
  PrimaryGeneratedColumn, // Para crear una columna id y autogenerada
  Column, // Para crear columnas
  ManyToOne,
} from "typeorm"

import { Course } from "./Course"

@Entity()
export class Student {
  @PrimaryGeneratedColumn()
    id: number

  @Column()
    firstName: string

  @Column()
    lastName: string

  @ManyToOne(type => Course, course => course.students)
    course: Course
}
