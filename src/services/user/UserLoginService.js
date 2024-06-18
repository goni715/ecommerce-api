const bcrypt = require('bcryptjs');
const CreateToken = require("../../utility/CreateToken");
const IsNotEmail = require("../../helper/IsNotEmail");


const UserLoginService= async (req, res, UserModel) => {

    try {
        const {usernameEmail, password} = req.body;
        let isNotEmail = await IsNotEmail(usernameEmail);

        if(isNotEmail){
            let user =await UserModel.findOne({username:usernameEmail});
            if(!user){
                res.status(404).json({message: "fail", data:"Wrong Username"});
            }else{
               if(user?.isBanned){
                   res.status(403).json({message: "fail", data:"Your Account is Banned, Please contact with authority"});
               }
               else{
                   let CheckPassword = await bcrypt.compare(password, user?.password);
                   //if password is not matching
                   if(!CheckPassword) {
                       res.status(400).json({message: "fail", data:"Wrong Password!"});
                   }
                   else{
                       let TokenData = {email: user?.email, id: user?._id,}
                       let token = await CreateToken(TokenData);
                       res.status(200).json({message:"success",token:token});
                   }
               }
            }
        }
        else{
            let user = await UserModel.findOne({email:usernameEmail});
            if(!user){
                res.status(404).json({message: "fail", data:"Could not Find this Email!"});
            }else{
                if(user?.isBanned){
                    res.status(403).json({message: "fail", data:"Your Account is Banned, Please contact with authority"});
                }
                else{
                    let CheckPassword = await bcrypt.compare(password, user?.password);
                    //if password is not matching
                    if(!CheckPassword) {
                        res.status(400).json({message: "fail", data:"Wrong Password!"});
                    }
                    else{
                        let TokenData = {email: user?.email, id: user?._id,}
                        let token = await CreateToken(TokenData);
                        res.status(200).json({message:"success",token:token});
                    }
                }
            }
        }

    }
    catch (error) {
        res.status(500).json({ message: "error", data:error.toString()});
    }
}


module.exports=UserLoginService;
