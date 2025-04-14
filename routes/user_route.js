const express=require("express");
const mongoose=require("mongoose");
const userRouter=express.Router();
const controllers=require("../controllers/user_contr");
const OurProjects=require("../controllers/product_contr");
const validate=require("../middleware/backend_validator");
const contactvalid=require("../validator/zod_valid");


userRouter.route("/user").get(controllers.home)
userRouter.route("/contact").post(validate(contactvalid),controllers.userInfo)
userRouter.route("/project").get(OurProjects);



module.exports=userRouter;







