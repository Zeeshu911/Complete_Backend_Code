// CRUD

import { Employee } from "../models/employeeSchema.js";

//POST
export const addEmployee = async (req, res, next) => {
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    return next(
      res.status(400).json({
        success: false,
        message: "Please provide all details",
      })
    );
  }
  const employee = await Employee.create({ name, email, phone });
  res.status(201).json({
    success: true,
    message: "Employee Created!",
    employee,
  });
};

//GET
export const getEmployees = async (req, res, next) => {
  const employees = await Employee.find();
  res.status(200).json({
    success: true,
    employees,
  });
};

//PUT
export const updateEmployee = async (req, res, next) => {
  const { id } = req.params;
  let employee = await Employee.findById(id);
  if (!employee) {
    return next(
      res.status(404).json({
        success: false,
        message: "Employee not found!",
      })
    );
  }
  const { name, email, phone } = req.body;
  employee = await Employee.findByIdAndUpdate(
    id,
    { name, email, phone },
    {
      new: true,
      useFindAndModify: false,
      runValidators: true,
    }
  );
  res.status(200).json({
    success: true,
    message: "Employee Updated",
    employee,
  });
};

//DELETE
export const deleteEmployee = async (req, res, next) => {
  const { id } = req.params;
  let employee = await Employee.findById(id);
  if (!employee) {
    return next(
      res.status(404).json({
        success: false,
        message: "Employee Not Found!",
      })
    );
  }
  await employee.deleteOne();
  res.status(200).json({
    success: true,
    message: "Employee Deleted",
  });
};
