const express = require('express')
const router = express.Router()
const buildingCtrl = require('../controllers/building')

router.get("/", buildingCtrl.index)

router.post("/", buildingCtrl.createBuilding)

router.get("/:id", buildingCtrl.buildingDetail)

router.patch("/:id", buildingCtrl.updateBuilding)

router.delete("/:id", buildingCtrl.deleteBuilding)

module.exports = router
