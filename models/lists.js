const mongoose = require('mongoose');
const productSchema = require('./product');

const listsSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  products: [{
    ...productSchema,
    active: {
      type: Boolean,
      default: true
    }
  }],
  date: {
    type: Date,
    default: Date.now
},
});

// here we choose collection name and a schema
module.exports = mongoose.model('lists', listsSchema);