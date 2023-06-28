// index.js
import React from 'react'
import adeolaImage from '../images/Avater image-1.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';


//User card component

const User = () =>(
  <div className='card-wrapper'>
    <div className='second-wrapper'>
    <img src={adeolaImage} alt='adeola img' className='avatar-img' />
     
    <div className='profile-text'>
    <h3>Adeola Abdulramon <span><FontAwesomeIcon icon={faCircleCheck} className="my-icon" style={{ color: 'red', fontSize: '24px' }} /> </span> </h3> 
    
    <h5 className='role'>Frontend Developer</h5>
    </div>
    <div className='skills'>
      <h2>Skills</h2>
      <ul className='skills-card'>
        <li className='each-card'>HTML</li>
        <li className='each-card'>HTML</li>
        <li className='each-card'>HTML</li>
        <li className='each-card' >HTML</li>
        <li className='each-card' >HTML</li>
        <li className='each-card' >HTML</li>
         <li className='each-card' >HTML</li>
         <li className='each-card'>HTML</li>
        <li className='each-card'>HTML</li>
        <li className='each-card' >HTML</li>
         <li className='each-card'>HTML</li>
        <li className='each-card'>HTML</li>
        
        

      </ul>
      </div>
      </div> 
  </div>
)

export default User;



       
      
