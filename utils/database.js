/* const express=require("express");
const mongoose=require("mongoose");

const URI="mongodb://127.0.0.1:27017/finalproject";

const database=async(req,res)=>{
    try{

     await mongoose.connect(URI);
     console.log("database connected ...! ");

    }catch(err){
        console.log("database URI are not a correct");
    }

}

module.exports=database; */



const mongoose = require("mongoose");

const database = async () => {
    const URI="mongodb://127.0.0.1:27017/finalproject";
    try {
        await mongoose.connect(URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Database connected...!");
    } catch (err) {
        console.error("Database connection error:", err);
    }
};

module.exports = database;
