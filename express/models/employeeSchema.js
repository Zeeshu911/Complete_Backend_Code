import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
  },
  phone: Number,
});

export const Employee = mongoose.model("Employee", employeeSchema);
