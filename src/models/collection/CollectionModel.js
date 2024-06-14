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
            required: [true, "title is required"],
            trim: true
        },
        image: {
            type: String,
            required: true,
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


const ContactModel = mongoose.model("collections", CollectionSchema);

module.exports = ContactModel