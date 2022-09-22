const express = require('express')
const router = express.Router()
const apartmentCtrl = require('../controllers/apartment')

router.get("/", apartmentCtrl.index)

router.post("/", apartmentCtrl.createApartment)

router.get("/:id", apartmentCtrl.apartmentDetails)

router.put("/:id", apartmentCtrl.updateApartment)

router.delete("/:id/:_id", apartmentCtrl.deleteApartment)

module.exports = router