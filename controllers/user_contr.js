const express = require("express");
const mongoose = require("mongoose");
const clientdata = require("../models/user_Schema");



const home = (req, res) => {
  try {
    res.status(200).json("wellcom to our home page this is your home page ..")
  } catch (err) {
    res.status(500).json("this is home page backend error type ", err)
    console.log("home page error", err)
  }
}


const userInfo = async (req, res) => {
  try {

    const { fullname, email, password, subject, message } = req.body;



    const dataInfo = await clientdata.findOne({ fullname: fullname })

    if (dataInfo) {

      return res.status(400).json({ message: "this user are present please use diffrent information about you" })

    } else {

      const user = new clientdata({ fullname, email, password, subject, message });
      await user.save();
      return res.status(200).json({ message: "your information are recived sometime latter i will contact you " });


    }



  } catch (err) {
    res.status(500).json(err);
  }
}

module.exports = { home, userInfo };