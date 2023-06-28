import React from 'react';
//import ReactDOM from 'react-dom'
import Country from './Country'



const Countries = ({ countries }) => {
  const countryList = countries.map((country) => (
    <Country key={country.name} country={country} />
  ))
  return <div>{countryList}</div>
}

export default Countries;