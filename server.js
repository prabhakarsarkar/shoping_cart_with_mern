const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")


const app = express();

app.use(bodyParser.json())

const db = require("./config/conntion")


const item = require("./router/item")

app.use("/",item)

const port =3002
app.listen(port,()=>{
    console.log("server is working port " ,port);
})