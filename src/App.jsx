import './App.css';
import Musica from './pages/Musica';
import  Home  from './pages/Home';
import {Link, Routes, Route} from 'react-router-dom';
import Formulario from './components/Formulario';

function App() {
  return (
    <>
    <div className = "container mt-5">
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
    </div>
    </>
    
  );
}

export default App;
