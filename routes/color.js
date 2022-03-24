const router = require('express').Router();
const colorSchema = require('../models/color');


//Get all colors
router.get('/colors', async (req, res) => {
    //"Find" with empty parametr (object) return all record
    colorSchema.find({}).then(function(colors){
        res.send(colors);
    })
})

//Get specific category
router.get('/colors/:id', async (req, res) => {
    colorSchema.findById({_id: req.params.id}).then(function(color){
        res.send(color);
    })
})

module.exports = router;