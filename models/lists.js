const mongoose = require('mongoose');
const products = require('./product');

const listsSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  products: [
    {
      type: products.schema,
    }
  ],
  date: {
    type: Date,
    default: Date.now
},
});

// here we choose collection name and a schema
module.exports = mongoose.model('lists', listsSchema);