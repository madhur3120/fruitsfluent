const express = require("express");
const user = require("../models/usermodel");

const router = express.Router();

router.post("/register",async(req,res)=> {

    const newuser = new user({name : req.body.name,email : req.body.email,password : req.body.password})
    const query_result =  await user.findOne({email:req.body.email})


    if(query_result==null) {
        const result = await newuser.save()
        res.json({msg : "1"})
    }
    else {  // user already registered returning msg 0
        res.json({
            msg: "0"
        })
    }
})

router.post("/login",async(req,res)=>{
    const query_result1 =  await user.findOne({email:req.body.email})
    const newuser = new user({email : req.body.email,password : req.body.password})

    if(query_result1==null) {
        res.json({msg : "0"})
    }
    else {  // user already registered returning msg 0
        const query_result2  = await user.findOne({email:req.body.email,password:req.body.password})
        if(query_result2==null) {
            res.json({
                msg: "00"
            })
        }
        else {
            res.json({
                msg: "1",
                name : query_result2.name
            })
        }
    }
})


module.exports = router;