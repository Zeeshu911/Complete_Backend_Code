import express from "express";
import { config } from "dotenv";
import { dbConnection } from "./database/dbConnection.js";
import userRouter from "./router/userRouter.js";
import cookieParser from "cookie-parser";
import taskRouter from "./router/taskRouter.js";
import cors from "cors";

const app = express();
config({ path: "./config/config.env" });

app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/user", userRouter);
app.use("/api/v1/task", taskRouter);

dbConnection();

export default app;
