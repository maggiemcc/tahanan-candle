const mongoose = require('mongoose');

const { Schema } = mongoose;

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String
  },
  image: {
    type: String
  },
  price: {
    type: Number,
    required: true,
    min: 0.99
  },
  size: {
    type: Number
  },
  quantity: {
    type: Number,
    min: 0,
    default: 0
  }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
