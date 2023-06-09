
import React from 'react';
import ReactDOM from 'react-dom';
import  { Component } from 'react';
import adeolaImage from './images/Avater image-1.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

class User extends Component {
  state = { 
    bgColor:'#ffffff'
   };

   changeColor = () =>{
    let whiteBg = 'white';
    let blackBg = 'black';
    let newColor = this.state.bgColor === whiteBg ? blackBg : whiteBg 
    this.setState({ bgColor: newColor })
   }
   
   
  render() { 
    const { bgColor } = this.state;

    return (
      <>
      <div className='card-wrapper'>
      <button onClick= {this.changeColor} style={{ cursor:'pointer',}} >Change Background</button>
      <style>{`body { background-color: ${bgColor}; }`}</style>
       
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
      </>
    );
  }
}
 
export default User;

const App = () => (
  <div className='app'>
    <User />
    
  </div>
)

const rootElement = document.getElementById('root')
// we render the App component using the ReactDOM package
ReactDOM.render(<App />,  rootElement)
