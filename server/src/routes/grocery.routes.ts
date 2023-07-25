import express from "express";
import { getGroceries } from "../controller/grocery.controller";

const groceryRouter = express.Router();

groceryRouter.get("/", getGroceries);

export default groceryRouter;
