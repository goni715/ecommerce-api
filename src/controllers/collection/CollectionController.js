const CollectionModel = require("../../models/collection/CollectionModel");
const CreateCollectionService = require("../../services/collection/CreateCollectionService");

exports.CreateCollection=async (req, res) => {
    await CreateCollectionService(req,res,CollectionModel);
}


exports.UpdateCollection=async (req, res) => {
    await CreateCollectionService(req,res,CollectionModel);
}