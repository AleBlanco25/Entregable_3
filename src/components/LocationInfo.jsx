import React from 'react'

const LocationInfo = ({location}) => {
console.log(location);

  return (
    <article className='location__info'>
      <h2 className='location__name'><b>Location: </b> {location?.name}</h2>
      <ul className='location__list-container'>
        <li className='location__list'><span className='location__detail'><b>Type: </b></span>{location?.type}</li>
        <li className='location__list'><span className='location__detail'><b>Dimension: </b></span>{location?.dimension}</li>
        <li className='location__list'><span className='location__detail'><b>Population: </b></span>{location?.residents.length}</li>
      </ul>
    </article>
  )
}

export default LocationInfo