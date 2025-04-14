const express=require("express");
const mongoose=require("mongoose");

const ProductCard=new mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    }


})

const prctCard=new mongoose.model("prctCard",ProductCard);

module.exports =prctCard;