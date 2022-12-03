const express = require("express");
const productmodel = require("../models/productmodel");

const router = express.Router();

router.post("/addproductback",async(req,res)=>{

    try {
        const newproduct = new productmodel({productname : req.body.productname,productprice : req.body.productprice,stock : req.body.stock,brand : req.body.brand,imgsrc:req.body.imgsrc})
        const result = await newproduct.save()
        console.log(result);
        
        res.send({message: true})
    } catch (error) {
     console.log("error in adding product " + error); 
     res.status(500)  
    }


    // res.send({success: true})
})

module.exports = router;