const mongoose = require("mongoose");
const slugify = require("slugify");
const UpdateCollectionService = async (req, res, CollectionModel) => {
    try{
        let id =req.params.id;
        const ObjectId = mongoose.Types.ObjectId;
        let UpdateQueryObject = {_id: new ObjectId(id)};

        let PostBody=req.body;
        if(PostBody.title){
            PostBody.slug=slugify(PostBody.title);
        }

        let data = await CollectionModel.updateOne(UpdateQueryObject,PostBody);
        res.status(200).json({message: "success", data: data});
    }
    catch(error){
        res.status(500).json({message: "error", data: error});
    }
}


module.exports=UpdateCollectionService