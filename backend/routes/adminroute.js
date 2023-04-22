const express = require("express");
const productmodel = require("../models/productmodel");
const ordermodel = require("../models/ordermodel")
const usermodel = require("../models/usermodel")

const bodyParser = require('body-parser')
let urlencodedparser = bodyParser.urlencoded({ extended: false })

const multer = require('multer')

const storage  = multer.diskStorage({
    destination: (req,file,cb)=>{
        cb(null,'../frontend/public/images')
    },
    filename : (req,file,cb) =>{
        console.log(file);
        cb(null,(file.originalname))
    }
})

const upload = multer({ storage: storage })

const router = express.Router();

router.post("/addproductback",upload.single('productimg'),urlencodedparser,async(req,res)=> {

    try {
        console.log(req.file.originalname);
        let imgname = "/images/" + req.file.originalname 
        const newproduct = new productmodel({productname : req.body.productname,productprice : req.body.productprice,stock : req.body.stock,brand : req.body.brand,imgsrc:imgname})
        const result = await newproduct.save()
        res.send({message: true})
    } catch (error) {
     console.log("error in adding product " + error); 
     res.status(500)  
    }
})

/**
 * @swagger
 * /admin/orders:
 *   get:
 *     summary: Get all orders
 *     description: Use to get all orders from the database.
 *     responses:
 *       200:
 *         description: Returns an array of orders
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Order'
 */

router.get("/orders",async(req,res)=>{
    try {
        ordermodel.find({},(err,data)=>{
            res.json({
                data:data
            })
        })
    } catch (error) {
        console.log(error);
    }
})


/**
 * @swagger
 * /admin/users:
 *   get:
 *     summary: Get all users
 *     description: Use to get all users from the database.
 *     responses:
 *       200:
 *         description: Returns an array of users
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/User'
 */

router.get("/users",async(req,res)=>{
    try {
        usermodel.find({},(err,data)=>{
            res.json({
                data:data
            })
        })
    } catch (error) {
        console.log(error);
    }
})

/**
 * @swagger
 * /admin/current_stock:
 *   get:
 *     summary: Get current stock
 *     description: Get all current product stock
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Array of current stock
 */

router.get("/current_stock",async(req,res)=>{
    try {
        productmodel.find({},(err,data)=>{
            res.json({
                data:data
            })
        })
    } catch (error) {
        console.log(error);
    }
})

/**
 * @swagger
 * /admin/remove_product:
 *   post:
 *     summary: Remove a product
 *     description: Remove a product from the stock
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: productname
 *         description: Name of the product to remove
 *         in: formData
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Product removed successfully
 *       500:
 *         description: Internal server error
 */

router.post("/remove_product",async(req,res)=>{

    try {
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