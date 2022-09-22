import React from 'react'
import { Link } from 'react-router-dom'

export default function PropertyTest({ address, image, id }) {
  return (
    <>
      <ul>
        <li>
          <Link to={`/PropertyDetailsPage/${id}`}> <img src={image} alt={address} /></Link>
        </li>
        <li>
          {address}
        </li>
      </ul>
    </>
  )
} 