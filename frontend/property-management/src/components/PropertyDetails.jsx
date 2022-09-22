import React from 'react'

const PropertyDetails = ({ id, tenant, unitNumber }) => {
  return (
    <div>
      <ul>
        <li>
          {unitNumber} : {tenant}
        </li>
      </ul>
    </div>
  )
}

export default PropertyDetails