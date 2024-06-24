const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
    {
        title:{
            type: String,
            required: [true, "title is required"],
            trim: true
        },
        slug:{
            type:String,
            required:true,
            unique: true,
            lowercase:true,
            trim:true
        },
        description:{
            type: String,
            required: [true, "description is required"],
            trim: true
        },
        category:{
            type: String,
            required: [true, "category is required"],
            trim: true
        },
        images: [
            {
                public_id: String,
                image_url: String,
            }
        ],
        price:{
            type:Number,
            required: true
        },
        cost:{
            type:Number,
            required: true
        },
        tags: [String],
        sizes: [String],
        colors: [String],
        collections: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "collections",
            }
        ],

    },
    { timestamps: true, versionKey:false}
)


const ProductModel = mongoose.model("products", ProductSchema);

module.exports = ProductModel