const mongoose = require("mongoose");

const schama = new mongoose.Schema({
  name: {
    type: String,
  },
});


module.exports = mongoose.model('Category', schama)