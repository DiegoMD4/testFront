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
      <section className='section-div'>
      <Routes>
        <Route path='/Musica' element={<Musica></Musica>}></Route>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path = '/Formulario' element = {<Formulario></Formulario>}></Route>
      </Routes>
      </section>
      
      <footer className="footerApp">
        Footer
      </footer>
    </div>
    
  );
}

export default App;
