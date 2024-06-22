const express =require('express');
const CollectionController = require("../controllers/collection/CollectionController");
const AuthVerifyMiddleware = require("../middlewares/AuthVerifyMiddleware");
const IsAdmin = require("../middlewares/IsAdmin");
const upload = require("../helper/UploadFile");


const router = express.Router();



router.post('/create-collection', upload.single("image"), CollectionController.CreateCollection);
router.get("/get-collections", CollectionController.GetCollections);
router.get("/get-collection/:id", CollectionController.GetCollection);
router.delete('/delete-collection/:id', CollectionController.DeleteCollection);
router.put('/update-collection/:id', CollectionController.UpdateCollection);
router.put('/update-collection-with-image/:id', upload.single("image"), CollectionController.UpdateCollectionWithImage);
// router.put('/update-contact-status/:id', AuthVerifyMiddleware, IsAdmin, ContactController.UpdateContact);
// router.get('/get-contact/:id', AuthVerifyMiddleware, ContactController.GetContact);
//




module.exports=router;

