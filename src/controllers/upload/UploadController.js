const cloudinary = require("../../helper/cloudinary");


exports.UploadImage = async (req, res)=>{
    try{

        if (req.file) {
           const cloudinaryResponse = await cloudinary.uploader.upload(req.file.path, {
                folder: "Borcella",
            });

            res.status(200).json({message:"success", data:cloudinaryResponse})

        } else {
            res.status(400).json('Please provide a file');
        }

    }
    catch(e) {
        res.status(500).json({message:"error"})
    }
}