import React from 'react';
import '../styles/nav.css';
import Musica from '../pages/musica';
import  Home  from '../pages/Home';
import Formulario from '../components/Formulario';
import {Link,  Routes, Route } from 'react-router-dom';


function Navbar() {
  return (
    <>
    <nav className='nav'>
            <ul>
              <li><Link to="/" >Home</Link></li>
              <li><Link to="/Musica" >Musica</Link></li>
              <li><Link to="" >Otro</Link></li>
            </ul>
    </nav>
    
    <Routes>
        <Route path='/Musica' element={<Musica></Musica>}></Route>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path = '/Formulario' element = {<Formulario></Formulario>}></Route>
      </Routes>
    </>
  )
}

export default Navbar