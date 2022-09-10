const mongoose = require('mongoose')

const buildingSchema = new mongoose.Schema({
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

const Building = mongoose.model('Building', buildingSchema)

module.exports = Building