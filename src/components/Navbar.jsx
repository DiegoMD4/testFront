import React from 'react';
import '../styles/Navbar.css';

import {Link} from 'react-router-dom';


function Navbar() {
  return (
    <>
    <nav className='nav'>
            <div className= 'box'>
              <Link to="/" >Home</Link>
              <Link to="/Musica" >Musica</Link>
              <Link to="" >Otro</Link>
            </div>
    </nav>
    
  
    </>
  )
}

export default Navbar