const router = require('express').Router();
const productSchema = require('../models/product');


//Create a new product
router.post('/product', async (req, res) => {

    const productExist = await productSchema.findOne({ name: req.body.name });
    if (productExist) return res.status(400).send('product_exist');

    console.log(req);
    let amount;

    if(req.body.unit === 'sztuk') {
        amount = 1;
    } else if (req.body.unit === 'gram') {
        amount = 100;
    } else if (req.body.unit === 'ml') {
        amount = 1000;
    }


    //Create product
    const product = new productSchema({
        name: req.body.name,
        categoryId: req.body.categoryId,
        unit: req.body.unit,
        amount: amount,
        amountToBuy: amountToBuy
    });

    try {
        const savedProduct = await product.save();
        res.send(savedProduct);
    } catch (err) {
        res.status(400).send(err);
    }
})

//Get all products and connect them with category from other collection
router.get('/products', async (req, res) => {
    //"Find" with empty parametr (object) return all record
    productSchema.find({})
    .populate("categoryId")
    .then(function(products){
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

//Edit specific product

router.put('/product/update/:id',  async (req, res) => {
    productSchema.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(req){
        res.send(req);
    })
})
module.exports = router;