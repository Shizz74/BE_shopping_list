const mongoose = require('mongoose');

const colorSchema = new mongoose.Schema({
  color: {
    type: String
  },
  taken: {
      type: Boolean
  }
});

// here we choose collection name and a schema
module.exports = mongoose.model('colors', colorSchema);