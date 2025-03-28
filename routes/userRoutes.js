import express from "express"
import { getAllUsers, create, updateUser, deleteUser } from "../controller/userController.js"

const route = express.Router();

route.get("/getAllUsers", getAllUsers);
route.post("/create", create);
route.put("/update:id", updateUser);
route.put("/update:id", deleteUser);

export default route;