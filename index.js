import express from "express"
import mongoose from "mongoose"
import bodyParser from "body-parser"
import dotenv from "dotenv"

const app = express()

app.use(bodyParser.json())
dotenv.config()

const PORT = process.env.PORT;
const MONGOURL = process.env.MONGO_URL;

mongoose
    .connect(MONGOURL)
    .then(() => {
        console.log("Db connected");
        app.listen(PORT, () => {
            console.log("server is running");
        })
    })
    .catch(err => {
        console.log(err);
    })