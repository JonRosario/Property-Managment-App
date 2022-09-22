const mongoose = require('mongoose')

const apartmentSchema = new mongoose.Schema({
  unitNumber: String,
  tenant: String,
  members: Number,
  bedrooms: Number,
  bathrooms: Number,
  image: String,
  property: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Property',
  }
})

const Apartment = mongoose.model('Apartment', apartmentSchema)

module.exports = Apartment