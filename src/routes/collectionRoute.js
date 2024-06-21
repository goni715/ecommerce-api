const express =require('express');
const CollectionController = require("../controllers/collection/CollectionController");
const AuthVerifyMiddleware = require("../middlewares/AuthVerifyMiddleware");
const IsAdmin = require("../middlewares/IsAdmin");
const upload = require("../helper/UploadFile");


const router = express.Router();



router.post('/create-collection', upload.single("image"), CollectionController.CreateCollection);
// router.get("/get-all-contact", AuthVerifyMiddleware, IsAdmin, ContactController.GetAllContact);
// router.delete('/delete-contact/:id', AuthVerifyMiddleware, IsAdmin, ContactController.DeleteContact);
// router.put('/update-contact-status/:id', AuthVerifyMiddleware, IsAdmin, ContactController.UpdateContact);
// router.get('/get-contact/:id', AuthVerifyMiddleware, ContactController.GetContact);
//




module.exports=router;

