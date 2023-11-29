import { Request, Response } from "express";
//const carListData = require("./../models/dummyData")
import { CarsModel } from "../models/dataCars";
const {v4: uuidv4} = require("uuid");
import cloudinary from "cloudinary";

          
cloudinary.v2.config({ 
  cloud_name: 'dbxuslppk', 
  api_key: '453374528959762', 
  api_secret: 'KgKvYZxW9fgSNI1ZJJkX6ctvQ8Y' 
});

interface CarListData {
    id_car: number;
    car_name: string;
    car_type: string;
    car_rent_price: number;
    img_path: string;
}

const get = async (req:Request, res: Response)=> { 
    const getCars = await CarsModel.query() || [];
    //@ts-ignore
    res.status(200).json(getCars);
}


const post = async (req: Request, res: Response)=> {
    const reqBody: any = req.body;

    if (!req.file) {
        return res.status(400).json({ message: "No image uploaded" });
    }
    
    const filebase64: string = req.file.buffer.toString("base64");
    const file: string = `data:${req.file.mimetype};base64,${filebase64}`;

    cloudinary.v2.uploader.upload(file, async (err: any, result: any) => {
        if (err) {
            return res.status(400).json({ message: err.message });
        }
        const newObjCar: CarListData = {
            ...reqBody,
            img_path: result.url,
        };
        const addCar = await CarsModel.query().insert(newObjCar);
        res.status(201).json(addCar);
    });

    
}
// const post = (req: Request, res: Response)=> {
//     const reqBody = req.body;
//     const newId = uuidv4();
//     const newObjectCarWithId = {
//         ...reqBody,
//         id: newId
//     }
    
//     console.log({reqBody})

//     //const newCarList = [...carListData, newObjectCarWithId]
//     res.status(201).json({
//         message: "OK",
//         status: 201
//     })
// }

// const getById = (req: Request, res: Response) => {
//     const getId = req.params.id;
//     const filterById = carListData.filter(({id})=> id === Number(getId))
    
//     res.status(200).json(filterById)
// }

const remove = async(req: Request, res: Response) => {
    const getId = req.params.id;
    const deleteById = await CarsModel.query().deleteById(getId);

    if(deleteById){
        const cars = await CarsModel.query();
        res.status(201).json({
            message: "delete berhasil",
            cars
        })
    }
    
}

const updateById = async(req: Request, res: Response) => {

}

export {
    get,
    post,
    remove,
    updateById
};