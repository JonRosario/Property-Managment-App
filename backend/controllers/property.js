const Property = require('../models/Property')

async function index(req, res) {
  let everyProperty = await Property.find({})
  try {
    res.send(everyProperty)
  } catch (error) {
    res.status(400).send(error)
  }
}

async function propertyDetail(req, res) {
  await Property.findById(req.params.id, (err, property) => {
    if (err) res.status(400).send(error)
    res.status(200).json(property.apartments)
  }).clone()
}
async function createProperty(req, res) {
  await Property.create(req.body)
  res.end()
}

async function updateProperty(req, res) {
  try {
    let buidling = await Property.findByIdAndUpdate(req.params.id, req.body)
    res.send(buidling)
  } catch (error) {
    res.status(400).send(error)
  }
}

async function deleteProperty(req, res) {
  try {
    await Property.findByIdAndDelete(req.params.id)
    if (!Property) res.status(400).send("No buidling found")
    res.status(200).send()
  } catch (error) {
    res.status(500).send(error)
  }
}

module.exports = {
  index,
  createProperty,
  propertyDetail,
  updateProperty,
  deleteProperty,
}