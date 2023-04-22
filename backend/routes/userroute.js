const express = require("express");
const user = require("../models/usermodel");
const order = require("../models/ordermodel");
const bcrypt = require('bcryptjs')
const router = express.Router();
const ordermodel = require("../models/ordermodel")
const config = require("../config/config");
const usermodel = require("../models/usermodel");
const productmodel = require("../models/productmodel")


/**
 * @swagger
 * /user/register:
 *   post:
 *     summary: Register a new user
 *     description: Create a new user in the database.
 *     tags:
 *       - users
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *               address:
 *                 type: string
 *     responses:
 *       200:
 *         description: User created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 msg:
 *                   type: string
 *       400:
 *         description: User already exists
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 msg:
 *                   type: string
 */

router.post("/register", async (req, res) => {

  const newuser = new user({ name: req.body.name, email: req.body.email, address: req.body.address, password: req.body.password, totalorders: 0 })
  const query_result = await user.findOne({ email: req.body.email })


  if (query_result == null) {
    const result = await newuser.save()
    res.json({ msg: "1" })
  }
  else {  // user already registered returning msg 0
    res.json({
      msg: "0"
    })
  }
})


/**
 * @swagger
 * /user/login:
 *   post:
 *     summary: Login a user
 *     description: Authenticate a user and log them in.
 *     tags:
 *       - users
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: User authenticated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 msg:
 *                   type: string
 *                 name:
 *                   type: string
 *                 address:
 *                   type: string
 *       400:
 *         description: User not found or incorrect password
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 msg:
 *                   type: string
 */



router.post("/login", async (req, res) => {
  try {
    const query_result = await user.findOne({ email: req.body.email })
    if (query_result == null) {
      res.json({ msg: "0" })
    } else {
      console.log(query_result.password);
      const passwordMatch = await bcrypt.compare(req.body.password, query_result.password)
      console.log(passwordMatch);
      if (!passwordMatch) {
        res.json({ msg: "00" })
      } else {
        if (req.body.email == config.email) {
          res.json({ msg: "admin", name: query_result.name })
        } else {
          res.json({
            msg: "1",
            name: query_result.name
          })
        }
      }
    }
  } catch (err) {
    console.error(err)
    res.status(500).json({ msg: "Internal server error" })
  }
})

/**
 * @swagger
 * /user/placeorder:
 *   post:
 *     summary: Route after placing an order
 *     description: Places a new order by providing user details, product details, and order total.
 *     tags:
 *       - Orders
 *     requestBody:
 *       description: Order details
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 description: The username of the user placing the order.
 *               email:
 *                 type: string
 *                 description: The email address of the user placing the order.
 *               products:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     name:
 *                       type: string
 *                       description: The name of the product.
 *                     price:
 *                       type: number
 *                       description: The price of the product.
 *                     quantity:
 *                       type: number
 *                       description: The quantity of the product.
 *               ordertotal:
 *                 type: number
 *                 description: The total cost of the order.
 *               address:
 *                 type: string
 *                 description: The delivery address for the order.
 *             example:
 *               username: JohnDoe
 *               email: johndoe@example.com
 *               products:
 *                 - name: Product 1
 *                   price: 10.99
 *                   quantity: 2
 *                 - name: Product 2
 *                   price: 5.99
 *                   quantity: 1
 *               ordertotal: 27.97
 *               address: 123 Main St, Anytown, USA
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 msg:
 *                   type: string
 *                   description: A message indicating the status of the order placement.
 *             example:
 *               msg: ok
 *       500:
 *         description: Internal server error
 */

router.post("/placeorder", async (req, res) => {

    // const query_result1 =  await user.findOne({email:req.body.email})
    await console.log(req.body);
    const neworder = new order({username : req.body.username,email : req.body.email,products : req.body.products,ordertotal : req.body.ordertotal})
    const result = await neworder.save()
    console.log(req.body.products);
    const product = await productmodel.findOne({productname : req.body.products}) ;
    product.stock = (Number(product.stock) - 1)
    product.save()

    let user = await usermodel.findOne({email: req.body.email})
    user.totalorders = String(Number(user.totalorders) + 1);
    await user.save();
    res.json({
        msg: "ok"
    })
})



router.post("/orders", async (req, res) => {
  try {
    console.log((req.body));
    ordermodel.find({ email: req.body.email }, (err, data) => {
      res.json({
        data: data
      })
    })
  } catch (error) {
    console.log(error);
  }
})

module.exports = router;