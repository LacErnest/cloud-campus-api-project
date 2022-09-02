const mongoose = require('mongoose');
const Schema = mongoose.Schema

const OrderSchema = new Schema({
  userId: {
    type: String
  },
  items: [{
    productId: {
      type: String,
    },
    name: String,
    quantity: {
      tyep: Number,
      required: true,
      min: [1, 'Quantity cannot be less than 1'],
      default: 1
    },
    price: Number
  }],
  bill: {
    type: Number,
    required: true,
    default: 0
  },
  date_added: {
    type: Date,
    default: Date.now
  }
})

module.exports = Order = mongoose.model('order', OrderSchema)