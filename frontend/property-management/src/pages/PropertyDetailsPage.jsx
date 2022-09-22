import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import PropertyDetails from '../components/PropertyDetails'

const PropertyDetailsPage = () => {
  const { id } = useParams()
  const [apts, setApts] = useState([])
  useEffect(() => {
    async function asynctest() {
      let res = await axios.get(`http://localhost:8000/property/${id}`)
      let data = res.data
      return data
    }
    async function aptArr() {
      let aptId = await asynctest()
      let aptArray = []
      aptId.forEach(async (id) => {
        try {
          let res = await axios.get(`http://localhost:8000/apartments/${id}`)
          let data = res.data
          aptArray.push(data)

        } catch (err) {
          console.log(err.message)
        }
      });
      setApts(aptArray)
    }
    aptArr()
  }, [id])
  console.log(apts)

  return (
    <div>
    </div>
  )
}

export default PropertyDetailsPage