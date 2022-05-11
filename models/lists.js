const mongoose = require('mongoose');

const listsSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  products: [{
    product: {
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'products'
    },
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