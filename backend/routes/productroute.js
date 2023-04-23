const express = require("express");
const productmodel = require("../models/productmodel")

const router = express.Router()


/**
 * @swagger
 * /products/all:
 *   get:
 *     summary: Retrieve all products
 *     responses:
 *       200:
 *         description: Returns an array of products
 */

router.get("/all", async (req, res) => {

    try {
        const data = await productmodel.find({})
            .lean() // use plain JavaScript objects instead of Mongoose documents
            .sort({ _id: 1 }) // sort by _id in ascending order
            .exec(); // execute the query

        res.json({ data });
    } catch (err) {
        console.error(err)
        res.status(500).json({ msg: "Internal server error" })
    }
});


/**
 * @swagger
 * /products/all/{id}:
 *   get:
 *     summary: Retrieve a product by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the product to retrieve
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Returns a product object
 *       404:
 *         description: Product not found
 */

router.get("/all/:id", async (req, res) => {
    let id = req.params.id
    productmodel.findOne({ _id: id }, (err, data) => {
        res.json({
            data: data
        })
    })

})


module.exports = router;

