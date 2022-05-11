const router = require('express').Router();
const listsSchema = require('../models/lists');


//Create a new list
router.post('/list', async (req, res) => {

    const listExist = await listsSchema.findOne({ name: req.body.name });
    if (listExist) return res.status(400).send('list_exist');

    //Create list
    const list = new listsSchema({
        name: req.body.name
    });

    try {
        const savedList = await list.save();
        res.send(savedList);
    } catch (err) {
        res.status(400).send(err);
    }
})

//Get all lists
router.get('/lists', async (req, res) => {
    //"Find" with empty parametr (object) return all record
    listsSchema.find({}).then(function(lists){
        res.send(lists);
    })
})

//Get specific list
router.get('/list/:id', async (req, res) => {
    listsSchema.findById({_id: req.params.id}).then(function(list){
        res.send(list);
    })
})

//Delete specific list
router.delete('/list/:id', async (req, res) => {
    listsSchema.findByIdAndDelete({_id: req.params.id}).then(function(list){
        res.send(list);
    })
    //Add error when e.g element doesn't exist
})

//Edit specific list
router.put('/list/update/:id',  async (req, res) => {
     listsSchema.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(req){
         res.send(req);
     })
})

//Add product to list 
router.put('/list/add-product/:id', async (req, res) => {
    console.log(req.body.items.productID);
    listsSchema.updateOne({_id: req.params.id}, {
        $push: {
            products: [{
                "productID": req.body.items.productID
            }]
        }
    })
    .then(function(req){
        res.send(req);
    })
})


module.exports = router;