const router = require('express').Router();
const productSchema = require('../models/product');


//Create a new product
router.post('/product', async (req, res) => {

    const productExist = await productSchema.findOne({ name: req.body.name });
    if (productExist) return res.status(400).send('product_exist');

    console.log(req);

    //Create product
    const product = new productSchema({
        name: req.body.name,
        desc: req.body.desc,
        category: req.body.category
    });

    try {
        const savedProduct = await product.save();
        res.send(savedProduct);
    } catch (err) {
        res.status(400).send(err);
    }
})

//Get all products
router.get('/products', async (req, res) => {
    //"Find" with empty parametr (object) return all record
    productSchema.find({}).then(function(products){
        res.send(products);
    })
})

//Get specific product
router.get('/product/:id', async (req, res) => {
    productSchema.findById({_id: req.params.id}).then(function(product){
        res.send(product);
    })
})

//Delete specific product
router.delete('/product/:id', async (req, res) => {
    productSchema.findByIdAndDelete({_id: req.params.id}).then(function(product){
        res.send(product);
    })
    //Add error when e.g element doesn't exist
})
module.exports = router;