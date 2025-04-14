const express=require("express");
const mongoose=require('mongoose');
const prctCard=require("../models/product_Schema");


const OurProjects=async(req,res)=>{
    try{
    const result=await prctCard.find();
    res.status(200).json(result);
    }catch(err){
        res.status(400).json({message:"project card data are not find some error are present in here ",err})
    }
    
}

module.exports=OurProjects;