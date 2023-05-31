import express from "express";

import {
  type Request,
  type Response,
  type NextFunction,
} from "express";

import { sqlQuery } from "../databases/sql-db";

import { type techCompaniesBody } from "../models/sql/techCompanies";

export const techCompaniesRouter = express.Router();

// CRUD: READ
techCompaniesRouter.get("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const raws = await sqlQuery(`
    SELECT *  
    FROM tech_companies
    `)

    const response = { data: raws }

    res.json(response);
  } catch (error) {
    next(error);
  }
});

// CRUD: READ
techCompaniesRouter.get("/:id", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id
    const raws = await sqlQuery(`
    SELECT *  
    FROM tech_companies
    WHERE id=${id}
    `)
    if (raws?.[0]) {
      const response = { data: raws }
      res.json(response)
    } else {
      res.status(404).json({ error: "Companie not found" })
    }
  } catch (error) {
    next(error);
  }
});

// CRUD: CREATE
techCompaniesRouter.post("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name, foundedYear, employeesNumber, headquarters, ceo } = req.body as techCompaniesBody
    const query: string = `
    INSERT INTO tech_companies (name, founded_year, employees_number, headquarters, ceo)
    VALUES (?, ?, ?, ?, ?)
    `
    const params = [name, foundedYear, employeesNumber, headquarters, ceo]
    const result = await sqlQuery(query, params)
    if (result) {
      return res.status(201).json({})
    } else {
      res.status(500).json({ error: "Companie not created" })
    }
  } catch (error) {
    next(error);
  }
});

// CRUD: DELETE
techCompaniesRouter.delete("/:id", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = parseInt(req.params.id)
    const raws = await sqlQuery(`
    DELETE 
    FROM tech_companies
    WHERE id=${id}
    `)
    res.json({ message: "Companie delete" })
    const response = { data: raws }

    res.json(response);
  } catch (error) {
    next(error);
  }
});

// CRUD: UPDATE
techCompaniesRouter.put("/:id", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = parseInt(req.params.id)
    const { name, foundedYear, employeesNumber, headquarters, ceo } = req.body as techCompaniesBody
    const params = [name, foundedYear, employeesNumber, headquarters, ceo]
    const query = `
    UPDATE tech_companies
    SET name = ?, founded_year= ?, employees_number= ?, headquarters= ?, ceo= ?
    WHERE id = ${id}`

    await sqlQuery(query, params)

    const raws = await sqlQuery(`
    SELECT *  
    FROM tech_companies
    WHERE id=${id}
    `)

    if (raws?.[0]) {
      const response = { data: raws }
      res.json(response)
    } else {
      res.status(404).json({ error: "Companie not found" })
    }
  } catch (error) {
    next(error);
  }
});
