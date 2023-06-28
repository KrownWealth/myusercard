import React from 'react';
//import ReactDOM from 'react-dom'


const Country = ({ 
  country: { name, city } 
}) => {
  return (
    <div>
      <h1>{name}</h1>
      <small>{city}</small>
    </div>
  )
}

export default Country;