const slugify = require("slugify");
const cloudinary = require("../../helper/cloudinary");
const CreateProductService = async (req, res, ProductModel) => {
    try{
        const {title} = req.body;
        const slug = slugify(title);
        let existingProduct=await ProductModel.findOne({slug:slug});

        if(existingProduct){
            res.status(409).json({message: "fail", data:"This product title is Already taken"});
        }
        else{

            if(req.files) {
                const files = req.files;
                let uploadedImages = [];
                for (const file of files) {
                    let cloudinaryResponse = await cloudinary.uploader.upload(file.path, {
                        folder: "Borcella-ecommerce/products",
                    });


                    let image = {
                        public_id: cloudinaryResponse.public_id,
                        image_url: cloudinaryResponse?.secure_url
                    }

                    uploadedImages.push(image) ;
                }

                if(uploadedImages.length>0){
                    if(title){
                        req.body.slug=slug;
                        req.body.images=uploadedImages
                    }

                    let data = await ProductModel.create(req.body)

                     res.status(201).json({message:"success",data:data});
                }
            }else{
                res.status(400).json('Please provide a file');
            }
        }
    }
    catch(error){
        res.status(500).json({message:"error", data:error});
    }
}


module.exports=CreateProductService