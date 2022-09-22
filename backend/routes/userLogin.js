const express = require('express')
const router = express.Router()
const userCtrl = require('../controllers/userLogin')

router.get("/", userCtrl.users)

router.post("/", userCtrl.login)



module.exports = router