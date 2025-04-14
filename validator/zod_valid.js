const express=require("express");
const Z=require("zod");

contactvalid=Z.object({
  
    fullname:Z
    .string({required_error:"first name are required "})
    .trim()
    .min(3,{message:"three character are required "})
    .max(255,{message:"less then 255 character are required "}),

    
    email:Z
    .string({required_error:"phone number are required "})
    .trim()
    .min(3,{message:"three character are required "})
    .max(255,{message:"less then 255 character are required "}),
    

    password:Z
    .string({required_error:"phone number are required "})
    .trim()
    .min(3,{message:"three character are required "})
    .max(255,{message:"less then 255 character are required "}),
    

    subject:Z
    .string({required_error:"phone number are required "})
    .trim()
    .min(3,{message:"three character are required "})
    .max(255,{message:"less then 255 character are required "}),

    message:Z
    .string({required_error:"your message are require"})
    .trim()
    .min(10,{message:"ten character are required"})
    .max(255,{message:"less then 255 character are required "})

    

})

module.exports=contactvalid;