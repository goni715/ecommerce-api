const ProductModel = require("../../models/product/ProductModel");
const CreateProductService = require("../../services/product/CreateProductService");


exports.CreateProduct=async (req, res) => {
    await CreateProductService(req,res,ProductModel);
}
