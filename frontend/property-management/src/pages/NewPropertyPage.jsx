import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const NewPropertyPage = () => {
  const initialState = {
    propertyType: "",
    address: "",
    description: "",
    image: "",
  }

  const navigate = useNavigate()

  const [formData, setFormData] = useState(initialState)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8000/property', formData)
      .then((res) => {
        setFormData(initialState)
        navigate('/', { replace: true })
      })
  }
  return (
    <>
      <h1>Add Property</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="propertyType">Property Type: {" "}</label>
          <input id='propertyType' name='propertyType' type="text"
            value={formData?.propertyType}
            onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="address">Address: {" "}</label>
          <input id='address' name='address' type="text"
            value={formData?.address}
            onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="image">image: {" "}</label>
          <input id='image' name='image' type="text"
            value={formData?.image}
            onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="description">description: {" "}</label>
          <input id='description' name='description' type="text"
            value={formData?.description}
            onChange={handleChange} />
        </div>
        <input type="submit" value='Add Property' />
      </form>
    </>
  )

}
export default NewPropertyPage