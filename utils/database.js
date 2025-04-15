const express=require("express");
const mongoose=require("mongoose");

const URI="mongodb+srv://ankitsharnagat182:ankitsharnagatankit@cluster0.f1u14av.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const database=async(req,res)=>{
    try{

     await mongoose.connect(URI);
     console.log("database connected ...! ");

    }catch(err){
        console.log("database URI are not a correct");
        console.log(err)
    }

}

module.exports=database; 



