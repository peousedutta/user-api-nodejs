import express from "express"
import { getAllUsers, create } from "../controller/userController.js"

const route = express.Router();

route.get("/getAllUsers", getAllUsers);
route.post("/create", create);

export default route;