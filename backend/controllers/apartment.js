const Property = require('../models/Property')
const Apartments = require('../models/Apartment')

async function index(req, res) {
  let everyApartment = await Apartments.find({})
  try {
    res.send(everyApartment)
  } catch (error) {
    res.status(400).send(error)
  }
}

async function apartmentDetails(req, res) {
  let apartment = await Apartments.findById(req.params.id)
  try {
    res.send(apartment)
  } catch (error) {
    res.status(400).send(error)
  }
}

async function createApartment(req, res) {
  await Apartments.create(req.body, async (err, apt) => {
    let aptID = apt._id
    await Property.findById(req.body.id, async (err, building) => {
      console.log(aptID)
      building.apartments.push(aptID)
      building.save()
    }).clone()
    res.end()
  })
}

async function updateApartment(req, res) {
  try {
    await Apartments.findByIdAndUpdate(req.params.id, req.body)
    await Apartments.save()
    res.send(Apartments)
  } catch (error) {
    res.status(400).send(error)
  }
}

async function deleteApartment(req, res) {
  try {
    let apt = await Apartments.findByIdAndDelete(req.params.id)
    console.log(apt)
    await Property.findByIdAndUpdate(req.params._id, { $pull: { apartments: { $eq: req.params.id } } })
    if (!Apartments) res.status(400).send("No apartment found")
    res.status(200).send()
  } catch (error) {
    res.status(500).send(error)
  }
}

module.exports = {
  index,
  apartmentDetails,
  createApartment,
  updateApartment,
  deleteApartment
}