import './App.css';
import {Routes,Route} from 'react-router-dom'
import {Login} from './Components/Login'
import {Signup} from './Components/Signup'
import { Navbar } from './Components/Navbar';
import img3 from './Images/img3.jpg'

function App() {
  return (
    <div className='App'>
      <Navbar/>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='signup' element={<Signup/>}/>
        </Routes>
        <img src={img3}></img>
    </div>
  );
}

export default App;
