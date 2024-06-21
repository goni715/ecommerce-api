const mongoose = require("mongoose");
const cloudinary = require("../../helper/cloudinary");
const DeleteCollectionService = async (req, res, CollectionModel) => {
    try{
        let id=req.params.id;
        const ObjectId = mongoose.Types.ObjectId;
        let QueryObject = {_id: new ObjectId(id)};

        let collection = await CollectionModel.findOne(QueryObject);
        let public_id = collection?.image?.public_id

        //Delete Collection
        let Delete =  await CollectionModel.deleteOne(QueryObject);

        //Delete Image from cloudinary
        if(Delete?.acknowledged){
            await cloudinary.uploader.destroy(public_id);
        }
        res.status(200).json({message: "success", Delete});
    }
    catch(error){
        res.status(500).json({message: "error", data: error.toString()});
    }
}

module.exports=DeleteCollectionService