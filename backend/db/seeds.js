const axios = require('axios')

const fetch = require('node-fetch')
async function getPostData() {
  let build = {
    "username": "JonRosario",
    "email": "jonrosariox@gmail.com",
    "password": "abc123"
  }
  let res = await axios.post('http://localhost:8000/user', build)

//   let apartments = [
//     {
      
//       "id": "6313fb684328583e17e8496a",
//     },
//     {
      
//       "id": "6313fb684328583e17e84969",
//     },
//     {
      
//       "id": "6313fb684328583e17e8496d",
//     },
//     {
      
//       "id": "6313fb684328583e17e8496b",
//     },
//     {
      
//       "id": "6313fb684328583e17e8496c",
//     },
//   ]

// for (let i = 0; i < apartments.length; i++){

//   let res2 = await axios.post('http://localhost:8000/building/apartments', apartments[i])
//   }
}

getPostData()