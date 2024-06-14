const express = require('express');
const AuthVerifyMiddleware = require("../middlewares/AuthVerifyMiddleware");
const IsAdmin = require("../middlewares/IsAdmin");
const DoctorController = require("../controllers/doctor/DoctorController");


const router = express.Router();


router.post("/create-doctor", AuthVerifyMiddleware,IsAdmin, DoctorController.CreateDoctor);
router.get("/get-all-doctor", DoctorController.GetAllDoctor);
router.put("/update-doctor/:id", AuthVerifyMiddleware,IsAdmin, DoctorController.UpdateDoctor);
router.delete("/delete-doctor/:id", AuthVerifyMiddleware,IsAdmin, DoctorController.DeleteDoctor);




module.exports = router;