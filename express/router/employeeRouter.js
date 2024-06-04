import express from "express";
import { addEmployee, deleteEmployee, getEmployees, updateEmployee } from "../controller/employers.js";

const router = express.Router();

router.post("/add", addEmployee)
router.get("/get", getEmployees)
router.put("/update/:id", updateEmployee)
router.delete("/delete/:id", deleteEmployee)

export default router;
