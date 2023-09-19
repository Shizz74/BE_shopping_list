const mongoose = require('mongoose');
const category = require('./category');

const listsSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  products: [
    {
      name: {
        type: String,
      },
      categoryId: {
        type: category.schema,
      },
      unit: {
        type: String,
      },
      amount: {
        type: Number,
      },
      amountToBuy: {
        type: Number,
      },
      active: {
        type: Boolean,
        default: true,
      },
      date: {
        type: Date,
        default: Date.now
      },
    }
  ],
  date: {
    type: Date,
    default: Date.now
  },
});

// here we choose collection name and a schema
module.exports = mongoose.model('lists', listsSchema);