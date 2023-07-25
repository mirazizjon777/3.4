import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import db from "./config/db";
import groceryRouter from "./routes/grocery.routes";

dotenv.config();

db();

const app = express();

app.use(cors());

app.use("/grocery", groceryRouter);

app.listen(8080, () => {
  console.log("server is running...");
});
