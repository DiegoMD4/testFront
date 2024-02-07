import './App.css';
import Navbar from "./components/Navbar";
import { Routes, Route } from 'react-router-dom';
import Musica from './pages/Musica';
import Formulario from './components/Formulario';

function App() {
  return (
    <>
      <header>
        <Navbar></Navbar>
      </header>
      <section className='section-div'>
      <Routes>
        <Route path='/Musica' element={<Musica></Musica>}></Route>
        <Route path = '/Formulario' element = {<Formulario></Formulario>}></Route>
      </Routes>
      </section>
    </>
    
  );
}

export default App;
