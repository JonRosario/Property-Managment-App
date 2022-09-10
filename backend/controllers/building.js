const Building = require('../models/Building')

async function index (req, res) {
  let everyBuilding = await Building.find({}) 
  try {
    res.send(everyBuilding)
  } catch (error) {
    res.status(400).send(error)
  }
}

async function buildingDetail(req, res) {
  try{
    await Building.findById(req.params.id)
  } catch (error){
    res.status(400).send(error)
  }
}
async function createBuilding(req, res) {
  await Building.create(req.body)
  res.end()
  }

  async function updateBuilding (req, res) {
  try {
    let buidling = await Building.findByIdAndUpdate(req.params.id, req.body)
    res.send(buidling)
  } catch(error) {
    res.status(400).send(error)
  }
}

async function deleteBuilding (req, res) {
  try {
    await Building.findByIdAndDelete(req.params.id)
    if (!Building) res.status(400).send("No buidling found")
    res.status(200).send()
  } catch (error) {
    res.status(500).send(error)
  }
}

  module.exports = {
    index,
    createBuilding,
    buildingDetail,
    updateBuilding,
    deleteBuilding,
  }