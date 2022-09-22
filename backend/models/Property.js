const mongoose = require('mongoose')

const propertySchema = new mongoose.Schema({
  propertyType: String,
  address: String,
  image: String,
  description: String,
  apartments: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Apartment'
  }],
  // owner: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'User',
  //   required: true,
  // }
})

const Property = mongoose.model('Property', propertySchema)

module.exports = Property