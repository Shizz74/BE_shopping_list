const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  desc: {
      type: String
  },
  category: {
      type: String
  },
  date: {
    type: Date,
    default: Date.now
},
});

// here we choose collection name and a schema
module.exports = mongoose.model('products', productSchema);