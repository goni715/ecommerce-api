const mongoose = require("mongoose");

const CollectionSchema = new mongoose.Schema(
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
        image: {
            public_id: { type: String },
            image_url: { type: String }
        },
        products: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Product",
            }
        ],

    },
    { timestamps: true, versionKey:false}
)


const CollectionModel = mongoose.model("collections", CollectionSchema);

module.exports = CollectionModel;