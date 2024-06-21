const GetCollectionsService = async (req, res, CollectionModel) => {
    try {
        let  data =await CollectionModel.aggregate([
              {$sort: {createdAt:-1}}
            ])
        res.status(200).json({message: "success", data: data});
    }
    catch(error){
        res.status(500).json({message: "error", data: error.toString()});
    }
}

module.exports=GetCollectionsService