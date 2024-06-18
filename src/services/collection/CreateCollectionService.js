const slugify = require("slugify");
const cloudinary = require("../../helper/cloudinary");

const CreateCollectionService = async (req, res, CollectionModel) => {
    try{
        const {title} = req.body;
        const slug = slugify(title);
        let existingCollection =await CollectionModel.findOne({slug:slug});

        if(existingCollection){
            res.status(409).json({message: "fail", data:"This collection name is Already taken"});
        }
        else{
            let cloudinaryResponse;
            if(req.file) {
                cloudinaryResponse = await cloudinary.uploader.upload(req.file.path, {
                    folder: "Borcella-ecommerce/collections",
                });

            }else{
                res.status(400).json('Please provide a file');
            }

            if(cloudinaryResponse){

                if(title){
                    req.body.slug=slug
                }

                req.body.image={
                    public_id:cloudinaryResponse?.public_id,
                    image_url:cloudinaryResponse?.secure_url
                }

                let data = await CollectionModel.create(req.body)
                res.status(201).json({message:"success",data:data, result: cloudinaryResponse});

            }
        }
    }
    catch(error){
        res.status(500).json({message:"error", data:error});
    }
}

module.exports=CreateCollectionService