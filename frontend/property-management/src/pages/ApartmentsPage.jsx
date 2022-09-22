import axios from 'axios'
import { useState, useEffect } from 'react'
// import { Link } from 'react-router-dom'
import Apartments from '../components/Apartments'

const ApartmentsPage = () => {

  const [apartments, setApartments] = useState()

  useEffect(() => {
    axios.get('http://localhost:8000/apartments')
      .then(apartments => setApartments(apartments.data))
  }, [])
  console.log(apartments)

  return (
    <div>
      {apartments?.map(a => {
        return (
          <Apartments key={a._id}
            unitNumber={a.unitNumber}
            tenant={a.tenant}
            members={a.members}
            bedrooms={a.bedrooms}
            bathrooms={a.bathrooms}
            image={a.image} />
        )
      })}
    </div>
  )
}
export default ApartmentsPage