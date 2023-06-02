import { AppDataSource } from "../databases/typeorm-datasource";

import { Student } from "../models/typeorm/Student";
import { Course } from "../models/typeorm/Course";

export const courseAndStudentSeed = async (): Promise<void> => {
  // Conectamos a la BBDD
  const dataSource = await AppDataSource.initialize()
  console.log(`Conectados a ${dataSource?.options?.database as string}`)

  // Borramos los students
  await AppDataSource.manager.delete(Student, {})
  await AppDataSource.manager.delete(Course, {})
  console.log("Eliminados los students y courses existentes")
  // Creamos dos students
  const student1 = {
    firstName: "Fernando",
    lastName: "Strawerry",
  }

  const student2 = {
    firstName: "Juan",
    lastName: "Fernández",
  }

  // Creamos course
  const course = {
    name: "Master Full Stack",
    department: "Development Web",
    students: [student1, student2]
  }

  // Creamos entidad course
  const courseEntity = AppDataSource.manager.create(Course, course)

  // Guardamos el course en base de datos
  await AppDataSource.manager.save(courseEntity)
  console.log("Creados los students y el course")

  await AppDataSource.destroy() // Cierra la BBDD
  console.log("Cerramos la conexión SQL")
}
void courseAndStudentSeed()
