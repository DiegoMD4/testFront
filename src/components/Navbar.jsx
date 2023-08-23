import React from 'react';
import '../styles/Navbar.css';

import {Link} from 'react-router-dom';


function Navbar() {
  return (
    <>
    <nav className='nav'>
            <div className= 'box'>
              <Link className='aNav' to="/" >Home</Link>
              <Link className='aNav' to="/Musica" >Musica</Link>
              <Link className='aNav' to="" >Otro</Link>
            </div>
    </nav>
    
  
    </>
  )
}

export default Navbar