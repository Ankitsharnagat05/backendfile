const express=require("express");


const ErrorMiddleware=(err,req,res,next)=>{
    try{
        const status=err.status||500;

        const message=err.message||"Backend Error";

        const extraDetail= err.extraDetail||"Error from Backend ";

        return res.status(status).json({message,extraDetail});

    }catch(err){
        res.status(400).send(err);

    }
}

module.exports=ErrorMiddleware;