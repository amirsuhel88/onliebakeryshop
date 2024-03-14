//import logo from './logo.svg';
import './App.css';
//import Login from './Login';
import Login from './Login'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Signup from './Signup';
//import home from './home'


function App() {
  return (
    <BrowserRouter>   
      <Routes>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/home' element={<home/>}> </Route>
      </Routes>
      {/* <test/> */}
      
    </BrowserRouter>
  )
}

export default App;
