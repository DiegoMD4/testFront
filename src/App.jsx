/* import './App.css'; */
import Musica from './pages/Musica';
import  Home  from './pages/Home';
import Formulario from './components/Formulario';

import {Link,  Routes, Route } from 'react-router-dom';
function App() {
  return (
    <>
      <header>
        <nav>
            <ul>
              <li><Link to="/" >Home</Link></li>
              <li><Link to="/Musica" >Musica</Link></li>
              <li><Link to="" >Otro</Link></li>
            </ul>
        </nav>
      </header>
      
      <Routes>
        <Route path='/Musica' element={<Musica></Musica>}></Route>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path = '/Formulario' element = {<Formulario></Formulario>}></Route>
      </Routes>

      <footer style={{backgroundColor: 'red'}}>
        Contactos
      </footer>
    </>
    
  );
}

export default App;

    /* {/* <div className = "container mt-5">
      <div className='btn-group'>
        <Link to="/" className='btn btn-dark'>Home</Link>
        <Link to="/Musica" className='btn btn-dark'>Musica</Link>
      </div>
      <hr></hr>
      <Routes>
        <Route path='/Musica' element={<Musica></Musica>}></Route>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path = '/Formulario' element = {<Formulario></Formulario>}></Route>
      </Routes>
    </div> */