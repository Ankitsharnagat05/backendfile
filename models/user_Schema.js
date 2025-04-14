const express=require("express");
const mongoose=require("mongoose");
const bcrypt=require("bcrypt");

const contactSchema=new mongoose.Schema({

    fullname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    subject:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    }
})

contactSchema.pre("save",async function (next) {

    try{
        if(this.isModified("password")){
            this.password=await bcrypt.hash(this.password,10);
            next();
        }

    }catch(err){
        console.log("your password are not convert in hash form some issue are create !");
    } 
})





const clientdata= new mongoose.model("clientdata",contactSchema);

module.exports=clientdata;