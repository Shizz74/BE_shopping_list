const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  categoryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'category'
  },
  date: {
    type: Date,
    default: Date.now
},
});

// here we choose collection name and a schema
module.exports = mongoose.model('products', productSchema);