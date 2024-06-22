const mongoose = require("mongoose");
const slugify = require("slugify");
const cloudinary = require("../../helper/cloudinary");
const UpdateCollectionWithImageService = async (req, res, CollectionModel) => {
    try{
        let id = req.params.id;
        const ObjectId = mongoose.Types.ObjectId;
        let QueryObject = {_id: new ObjectId(id)};
        let {title, description, public_id}=req.body;

        let slug;
        if(title){
            slug=slugify(title)
        }

        let Update = await CollectionModel.updateOne(QueryObject,{title:title, description:description, slug:slug});

        if(Update?.modifiedCount===1){
            let cloudinaryResponse;
            if(req.file) {
                await cloudinary.uploader.destroy(public_id);
                cloudinaryResponse = await cloudinary.uploader.upload(req.file.path, {
                    folder: "Borcella-ecommerce/collections",
                });

            }else{
                res.status(400).json('Please provide a file');
            }

            if(cloudinaryResponse){
                const image={
                    public_id:cloudinaryResponse?.public_id,
                    image_url:cloudinaryResponse?.secure_url
                }

                let UpdateImage = await CollectionModel.updateOne(QueryObject,{image:image});
                res.status(200).json({message: "success", data: UpdateImage});
            }
        }
    }
    catch (error) {
        res.status(500).json({message: "error", data: error});
    }
}

module.exports=UpdateCollectionWithImageService