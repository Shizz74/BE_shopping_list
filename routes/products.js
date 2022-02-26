const router = require('express').Router();
const productSchema = require('../models/product');

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
module.exports = router;