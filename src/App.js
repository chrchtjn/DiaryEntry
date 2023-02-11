
import './App.css';
import Navbar from './NavBar.js';
import SignUp from './SignUp.js';
import Login from './Login.js';
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className='all'>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<SignUp/>}/>
        <Route exact path='/Login' element={<Login/>}/>
        
      </Routes>
    </div>
  );
}

export default App;
