import './App.css';
/* import Login from './pages/Login'; */
import { Card } from './components/card';

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className='col'>
            <Card></Card>
        </div>
        <div className='col'>
            <Card></Card>
        </div>
      </div>
    </div>
  );
}

export default App;
