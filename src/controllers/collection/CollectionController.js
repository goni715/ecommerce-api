const CollectionModel = require("../../models/collection/CollectionModel");
const CreateCollectionService = require("../../services/collection/CreateCollectionService");
const GetCollectionsService = require("../../services/collection/GetCollectionsService");
const DeleteCollectionService = require("../../services/collection/DeleteCollectionService");
const DetailsService = require("../../services/common/DetailsService");
const UpdateCollectionWithImageService = require("../../services/collection/UpdateCollectionWithImageService");
const UpdateCollectionService = require("../../services/collection/UpdateCollectionService");

exports.CreateCollection=async (req, res) => {
    await CreateCollectionService(req,res,CollectionModel);
}

exports.GetCollections=async (req, res) => {
    await GetCollectionsService(req,res,CollectionModel);
}

exports.GetCollection=async (req, res) => {
    await DetailsService(req,res,CollectionModel);
}

exports.UpdateCollection=async (req, res) => {
    await UpdateCollectionService(req,res,CollectionModel);
}

exports.UpdateCollectionWithImage=async (req, res) => {
    await UpdateCollectionWithImageService(req,res,CollectionModel);
}

exports.DeleteCollection=async(req,res)=>{
    await DeleteCollectionService(req, res, CollectionModel)
}