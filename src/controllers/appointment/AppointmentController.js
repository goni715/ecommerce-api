const AppointmentModel = require("../../models/appointment/AppointmentModel");
const GetAppointmentsService = require("../../services/appointment/GetAppointmentsService");
const CreateAppointmentService = require("../../services/appointment/CreateAppointmentService");
const DeleteService = require("../../services/common/DeleteService");



exports.CreateAppointment=async (req, res) => {
    await CreateAppointmentService(req,res,AppointmentModel);
}
exports.GetAppointments=async(req,res)=>{
    await GetAppointmentsService(req,res,AppointmentModel)
}

exports.DeleteAppointment = async (req, res) =>{
    await DeleteService(req,res,AppointmentModel);
}