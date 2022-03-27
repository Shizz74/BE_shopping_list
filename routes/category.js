const router = require('express').Router();
const categorySchema = require('../models/category');


//Create a new category
router.post('/category', async (req, res) => {

    const categoryExist = await categorySchema.findOne({ name: req.body.name });
    if (categoryExist) return res.status(400).send('category_exist');

    console.log(req);

    const colorExist = await categorySchema.findOne({ color: req.body.name });
    if (colorExist) return res.status(400).send('color_exist');

    console.log(colorExist);

    //Create category
    const category = new categorySchema({
        name: req.body.name,
        color: req.body.color
    });

    try {
        const savedCategory = await category.save();
        res.send(savedCategory);
    } catch (err) {
        res.status(400).send(err);
    }
})

//Get all categries
router.get('/category', async (req, res) => {
    //"Find" with empty parametr (object) return all record
    categorySchema.find({}).then(function(categories){
        res.send(categories);
    })
})

//Get specific category
router.get('/category/:id', async (req, res) => {
    categorySchema.findById({_id: req.params.id}).then(function(category){
        res.send(category);
    })
})

//Delete specific category
router.delete('/category/:id', async (req, res) => {
    categorySchema.findByIdAndDelete({_id: req.params.id}).then(function(product){
        res.send(product);
    })
    //Add error when e.g element doesn't exist
})
module.exports = router;