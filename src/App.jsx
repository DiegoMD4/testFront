/* import './App.css'; */
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <header>
        <Navbar></Navbar>
      </header>
      
      

      <footer style={{backgroundColor: 'red'}}>
        Footer
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