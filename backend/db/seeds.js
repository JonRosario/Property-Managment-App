const axios = require('axios')

const fetch = require('node-fetch')
async function getPostData() {
  let build = {
    "propertyType": "Duplex",
    "address": "123 main street",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBck1Xw7LAYI1GCnzxVq1JP00o_muKRYbjOw&usqp=CAU",
    "description": "2 unit home"
  }
  // let res = await axios.post('http://localhost:8000/building', build)

  let apartments = [
    {
      
      "id": "6313fb684328583e17e8496a",
    },
    {
      
      "id": "6313fb684328583e17e84969",
    },
    {
      
      "id": "6313fb684328583e17e8496d",
    },
    {
      
      "id": "6313fb684328583e17e8496b",
    },
    {
      
      "id": "6313fb684328583e17e8496c",
    },
  ]

for (let i = 0; i < apartments.length; i++){

  let res2 = await axios.post('http://localhost:8000/building/apartments', apartments[i])
  }
}

getPostData()