const express=require("express");
const ErrorMiddleware=require("../validator/zod_valid");


const validate=(Schema)=>async (req,res,next)=>{
    try{
   const bodyParse= await Schema.parseAsync(req.body);
     req.body=bodyParse;
     next();
     
    }catch(err){
      console.log("Error",err);

      if(err.errors && err.errors.length >0){

        const status=422;
        const message="Fill the proper address";
        const extraDetail=err.errors[0].message;


        const error={
          status,
          message,
          extraDetail

        }

        res.status(422).json(error);

      }else{
        res.status(400).json({ message: "Validation error" });

      }

    }

}

module.exports= validate ;