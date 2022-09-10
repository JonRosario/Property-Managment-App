const mongoose = require('mongoose')

const apartmentSchema = new mongoose.Schema({
  unitNumber: String,
  tenant: String,
  members: Number,
  bedrooms: Number,
  bathrooms: Number,
  image: String,
  building: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Building',
  }
})

const Apartment = mongoose.model('Apartment', apartmentSchema)

module.exports = Apartment