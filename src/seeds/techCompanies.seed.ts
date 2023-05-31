// //  Importamos Mongoose:

// import { sqlConnect } from "../databases/sql-db";
// import { resetTechCompanies } from "../utils/resetTechCompanies"

// //  Función asíncrona para conectar con la BBDD y ejecutar la función de reseteo de datos.
// const seedUsers = async (): Promise<void> => {
//   try {
//     await sqlConnect(); //  Esperamos a que conecte con la BBDD.
//     await resetTechCompanies(); //  Esperamos que ejecute la función de reseteo de users.
//   } catch (error) {
//     //  Si hay error lanzamos el error por consola.
//     console.error(error);
//   };
// }
// void seedUsers(); //  Llamamos a la función.
