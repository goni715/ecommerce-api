const CollectionModel = require("../../models/collection/CollectionModel");
const CreateCollectionService = require("../../services/collection/CreateCollectionService");
const GetCollectionsService = require("../../services/collection/GetCollectionsService");
const DeleteCollectionService = require("../../services/collection/DeleteCollectionService");

exports.CreateCollection=async (req, res) => {
    await CreateCollectionService(req,res,CollectionModel);
}

exports.GetCollections=async (req, res) => {
    await GetCollectionsService(req,res,CollectionModel);
}

exports.UpdateCollection=async (req, res) => {
    await CreateCollectionService(req,res,CollectionModel);
}

exports.DeleteCollection=async(req,res)=>{
    await DeleteCollectionService(req, res, CollectionModel)
}