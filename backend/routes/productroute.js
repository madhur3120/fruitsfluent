const express = require("express");
const productmodel = require("../models/productmodel")

const router = express.Router()

router.get("/all",async(req,res)=>{
    
    productmodel.find({},(err,data)=>{
        console.log(data)
        res.json({
            data:data
        })
    })
    // console.log(result);
    // res.send(data)
})

router.get("/all/:id",async(req,res)=>{
    let id = req.params.id
    console.log(id);
    productmodel.findOne({_id:id},(err,data)=>{
        console.log(data)
        console.log("jrigir");
        res.json({
            data:data
        })
    })

})

module.exports = router;

