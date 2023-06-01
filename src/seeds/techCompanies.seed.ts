import { sqlConnect, sqlQuery } from "../databases/sql-db";
import { type techCompanies } from "../models/sql/techCompanies";

const companyList: techCompanies[] = [
  {
    name: "Google",
    founded_year: 1998,
    employees_number: 135301,
    headquarters: "Mountain View, California, United States",
    ceo: "Sundar Pichai",
  },
  {
    name: "Apple",
    founded_year: 1976,
    employees_number: 147000,
    headquarters: "Cupertino, California, United States",
    ceo: "Tim Cook",
  },
  {
    name: "Microsoft",
    founded_year: 1975,
    employees_number: 181000,
    headquarters: "Redmond, Washington, United States",
    ceo: "Satya Nadella",
  },
  {
    name: "Amazon",
    founded_year: 1994,
    employees_number: 1271000,
    headquarters: "Seattle, Washington, United States",
    ceo: "Andy Jassy",
  },
  {
    name: "Facebook",
    founded_year: 2004,
    employees_number: 74450,
    headquarters: "Menlo Park, California, United States",
    ceo: "Mark Zuckerberg",
  },
  {
    name: "Tesla",
    founded_year: 2003,
    employees_number: 70000,
    headquarters: "Palo Alto, California, United States",
    ceo: "Elon Musk",
  },
  {
    name: "Netflix",
    founded_year: 1997,
    employees_number: 9200,
    headquarters: "Los Gatos, California, United States",
    ceo: "Reed Hastings",
  },
  {
    name: "Adobe",
    founded_year: 1982,
    employees_number: 22477,
    headquarters: "San Jose, California, United States",
    ceo: "Shantanu Narayen",
  },
  {
    name: "Intel",
    founded_year: 1968,
    employees_number: 110800,
    headquarters: "Santa Clara, California, United States",
    ceo: "Patrick Gelsinger",
  },
  {
    name: "IBM",
    founded_year: 1911,
    employees_number: 352600,
    headquarters: "Armonk, New York, United States",
    ceo: "Arvind Krishna",
  },
  {
    name: "Oracle",
    founded_year: 1977,
    employees_number: 136000,
    headquarters: "Redwood City, California, United States",
    ceo: "Safra Catz",
  },
  {
    name: "Salesforce",
    founded_year: 1999,
    employees_number: 56000,
    headquarters: "San Francisco, California, United States",
    ceo: "Marc Benioff",
  },
  {
    name: "Nvidia",
    founded_year: 1993,
    employees_number: 18300,
    headquarters: "Santa Clara, California, United States",
    ceo: "Jensen Huang",
  },
  {
    name: "Twitter",
    founded_year: 2006,
    employees_number: 4800,
    headquarters: "San Francisco, California, United States",
    ceo: "Jack Dorsey",
  },
  {
    name: "Snap",
    founded_year: 2011,
    employees_number: 3300,
    headquarters: "Santa Monica, California, United States",
    ceo: "Evan Spiegel",
  },
  {
    name: "Uber",
    founded_year: 2009,
    employees_number: 22200,
    headquarters: "San Francisco, California, United States",
    ceo: "Dara Khosrowshahi",
  },
  {
    name: "Airbnb",
    founded_year: 2008,
    employees_number: 6500,
    headquarters: "San Francisco, California, United States",
    ceo: "Brian Chesky",
  },
  {
    name: "Intellectual Ventures",
    founded_year: 2000,
    employees_number: 650,
    headquarters: "Bellevue, Washington, United States",
    ceo: "Nathan Myhrvold",
  },
  {
    name: "Palantir Technologies",
    founded_year: 2003,
    employees_number: 2500,
    headquarters: "Denver, Colorado, United States",
    ceo: "Alex Karp",
  },
  {
    name: "SpaceX",
    founded_year: 2002,
    employees_number: 10000,
    headquarters: "Hawthorne, California, United States",
    ceo: "Elon Musk",
  },
];

const seedTechCompanies = async (): Promise<void> => {
  try {
    const deleteQuery = "DELETE FROM tech_companies "

    await sqlConnect(); // Esperamos a que conecte con la BBDD.
    await sqlQuery(deleteQuery); // Borra los datos existentes en la tabla.
    console.log("Datos borrados tech_companies")
    // Generar la cadena de valores de inserción
    const valuesString = companyList
      .map(
        company => `('${company.name}', ${company.founded_year}, ${company.employees_number}, '${company.headquarters}', '${company.ceo}')`
      )
      .join(", ");

    const insertQuery = `INSERT INTO tech_companies (name, founded_year, employees_number, headquarters, ceo) VALUES ${valuesString}`;

    await sqlConnect(); // Esperamos a que conecte con la BBDD.
    await sqlQuery(insertQuery); // Inserta los nuevos datos en la tabla.
    console.log("Datos creados tech_companies")
  } catch (error) {
    // Si hay un error, lo lanzamos por consola.
    console.error(error);
  }
};

void seedTechCompanies(); //  Llamamos a la función.
