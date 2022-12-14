const express = require('express')
const app = express()
const PORT = 8000
const morgan = require('morgan')
const cors = require('cors')
const methodOverride = require('method-override')
const cookieParser = require('cookie-parser')

require('./db/connection')

app.use(cors())
app.use(morgan('dev'))
app.use(methodOverride('_method'))
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.json("We're live")
})

app.use('/property', require("./routes/property"))
app.use('/apartments', require("./routes/apartment"))
app.use('/login', require("./routes/userLogin"))
app.use('/signup', require("./routes/userSignup"))



app.listen(PORT, () => {
  console.log('Listening on port', PORT)
})