import React from 'react'

const Apartments = ({ unitNumber, image }) => {
  return (
    <div>
      <ul>
        <li><img src={image} alt={unitNumber} /></li>
      </ul>
      <ul>
        <li> {unitNumber} </li>
      </ul>
    </div>
  )
}

export default Apartments