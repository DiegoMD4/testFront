import './App.css';
import Navbar from "./components/Navbar";
import { Routes, Route } from 'react-router-dom';
import Musica from './pages/Musica';
import  Home  from './pages/Home';
import Formulario from './components/Formulario';

function App() {
  return (
    <div className='theme'>
      <header>
        <Navbar></Navbar>
      </header>
      <Routes>
        <Route path='/Musica' element={<Musica></Musica>}></Route>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path = '/Formulario' element = {<Formulario></Formulario>}></Route>
      </Routes>
      <footer className="footerApp">
        Footer
      </footer>
    </div>
    
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