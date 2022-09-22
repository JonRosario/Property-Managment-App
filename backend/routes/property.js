const express = require('express')
const router = express.Router()
const propertyCtrl = require('../controllers/property')

router.get("/", propertyCtrl.index)

router.post("/", propertyCtrl.createProperty)

router.get("/:id", propertyCtrl.propertyDetail)

router.put("/:id", propertyCtrl.updateProperty)

router.delete("/:id", propertyCtrl.deleteProperty)

module.exports = router
