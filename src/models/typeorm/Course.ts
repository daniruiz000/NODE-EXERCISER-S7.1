import {
  Entity, // Para hacer entidades
  PrimaryGeneratedColumn, // Para crear una columna id y autogenerada
  Column, // Para crear columnas
  OneToMany, // Una entidad de estas se relaciona con muchas otras entidades
} from "typeorm"

import { Student } from "./Student"

@Entity()
export class Course {
  @PrimaryGeneratedColumn()
    id: number

  @Column()
    name: string

  @Column()
    department: string

  // JUGADORES
  @OneToMany(type => Student, student => student.course, { cascade: true })
    students: Student[];
}
