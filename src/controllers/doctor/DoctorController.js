const GetAllService = require("../../services/common/GetAllService");
const DoctorModel = require("../../models/doctor/DoctorModel");
const CreateService = require("../../services/common/CreateService");
const UpdateService = require("../../services/common/UpdateService");
const DeleteService = require("../../services/common/DeleteService");
const mongoose = require("mongoose");
const CheckAssociateService = require("../../services/common/CheckAssociateService");
const AppointmentModel = require("../../models/appointment/AppointmentModel");


exports.CreateDoctor = async (req, res) =>{
    await CreateService(req,res,DoctorModel);
}

exports.GetAllDoctor=async(req,res)=>{
    const projection = {$project: {_id:1, email:1, name:1, phone:1, specialization:1, experience:1}}
    await GetAllService(req,res,DoctorModel, projection)
}

exports.UpdateDoctor = async (req, res) =>{
    await UpdateService(req,res,DoctorModel);
}

exports.DeleteDoctor=async (req, res) => {
    let deleteId=req.params.id;
    const ObjectId = mongoose.Types.ObjectId;
    let CheckAssociate = await CheckAssociateService(req, res,{doctorId: new ObjectId(deleteId)},AppointmentModel);
    if(CheckAssociate){
        res.status(403).json({message:"associate", data: "associated with Appointment"})
    }else{
        await DeleteService(req, res, DoctorModel);
    }
}
