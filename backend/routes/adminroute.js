const express = require("express");
const productmodel = require("../models/productmodel");
const ordermodel = require("../models/ordermodel")
const usermodel = require("../models/usermodel")


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

router.get("/orders",async(req,res)=>{
    try {
        ordermodel.find({},(err,data)=>{
            console.log(data)
            res.json({
                data:data
            })
        })
    } catch (error) {
        console.log(error);
    }
})


router.get("/users",async(req,res)=>{
    try {
        usermodel.find({},(err,data)=>{
            console.log(data)
            res.json({
                data:data
            })
        })
    } catch (error) {
        console.log(error);
    }
})

router.get("/current_stock",async(req,res)=>{
    try {
        productmodel.find({},(err,data)=>{
            console.log(data)
            res.json({
                data:data
            })
        })
    } catch (error) {
        console.log(error);
    }
})

router.post("/remove_product",async(req,res)=>{

    try {
        console.log("back");
        await productmodel.deleteOne({"productname" : req.body.productname})        
        return res
            .status(200)
            .json({message: true})
    } catch (error) {
     console.log("error in removing product " + error); 
     res.status(500)  
    }

})



module.exports = router;