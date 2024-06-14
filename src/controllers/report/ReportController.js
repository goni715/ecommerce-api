const ReportModel = require("../../models/report/ReportModel");
const CreateReportService = require("../../services/report/CreateReportService");

exports.CreateReport=async (req, res) => {
    await CreateReportService(req,res,ReportModel);
}