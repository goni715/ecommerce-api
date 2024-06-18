const hashedPassword = require("../../utility/hashedPassword");


const UserCreateService= async (req,res,DataModel) => {
   try{
      const {username, email} = req.body;
       let existingEmail = await DataModel.findOne({email: email});

       if(existingEmail){
           res.status(409).json({message: "fail", data:"Email Already Exist"}); //conflicting-request
       }
       else{
           let existingUsername = await DataModel.findOne({username: username});
           if(existingUsername){
               res.status(403).json({message: "fail", data:"Username is already taken!"}); //conflicting-request
           }
           else{
               req.body.password = await hashedPassword(req.body.password);//hashedPassword
               let data = await DataModel.create(req.body)
               res.status(201).json({message: "success", data:data});
           }
       }
   }
   catch (error) {
      res.status(500).json({ message: "error", data:error.toString()});
   }
}

module.exports = UserCreateService;

