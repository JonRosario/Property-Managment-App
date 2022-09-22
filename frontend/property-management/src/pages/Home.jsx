import axios from 'axios'
import { useState, useEffect } from 'react'
// import { Link } from 'react-router-dom'
import PropertyTest from '../components/Properties'

const Home = () => {

  const [properties, setProperties] = useState()

  useEffect(() => {
    axios.get('http://localhost:8000/property')
      .then(properties => setProperties(properties.data))
  }, [])
  console.log(properties)

  return (
    <div>
      {properties?.map(p => {
        return (
          <PropertyTest id={p._id}
            propertyType={p.propertyType}
            address={p.address}
            image={p.image}
            description={p.description} />
        )
      })}
    </div>
  )
}

export default Home