import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    minLength: [3, "Name must at least contain 3 characters."],
    maxLength: [32, "Name cannot exceed 32 characters."],
  },
  email: String,
  phone: Number,
  password: {
    type: String,
    minLength: [8, "Password must have at least 8 Characters."],
  },
});

export const User = mongoose.model("User", userSchema);
