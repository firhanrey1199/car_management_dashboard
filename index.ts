import express, { Express } from "express";
//import handleLogger from "./src/middleware/handleLogger";
const carRouter = require("./src/routes/carRouter");
import knex from "knex";
import { Model } from "objection";
const app: Express = express();
const PORT = 3000;

// const express = require("express").default;
// const Express = require("express").Express;
// const isAdmin = require("./src/middleware/isAdmin")
// const handleLogger = require("./src/middleware/handleLogger")
// 
// const upload = require("./src/middleware/upload");

//const cloudinary = require("cloudinary").v2;
const knexInstance = knex({
    client: "pg",
    connection: {
      database: "binar_car",
      user: "firhan123",
      password: "firhan",
    },
  });
// import {v2 as cloudinary} from 'cloudinary';    



Model.knex(knexInstance);

app.use(express.static("public"));
app.use(express.urlencoded())

//app.use(handleLogger);
// app.use(isAdmin);
app.use("/v1/cars", carRouter)
// app.put("/v1/cars/:id/picture", upload.single("picture"), (req, res)=> {
//     // const url = `/uploads/${req.file.filename}`
//     // const filebase64 = req
//     cloudinary.config({ 
//         cloud_name: 'dbxuslppk', 
//         api_key: '453374528959762', 
//         api_secret: 'KgKvYZxW9fgSNI1ZJJkX6ctvQ8Y' 
//       });

//     res.status(200).json({message: "photo succesfully uploaded!", url})
// })

app.listen(PORT, ()=>{
    console.log(`is listening to port ${PORT}`)
} )