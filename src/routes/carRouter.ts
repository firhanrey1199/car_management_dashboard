const express = require("express");
const router = express.Router();
import * as carController from "./../controllers/carsControllers";

// SELECT * FROM cars;
router.get("/",  carController.get); //buat ambil data

// SELECT * FROM cars WHERE; 
//router.get("/:id",  carController.getById);

// INSERT INTO cars (field1, dll) values (v1,v2,dll);
router.post("/create",  carController.post); //buat kirim data

// DELETE FROM cars WHERE id=(:id);
router.delete("/delete/:id",  carController.remove);

// UPDATE ....
router.put("/:id",  carController.updateById);

module.exports = router;