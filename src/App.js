import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route,Routes} from  "react-router-dom"
import Navbar from './components/Navbar';
import home from './components/home';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  return (
    <>
   <Navbar/>
   <home/>
 
 {/*<Routes>
     <Route path='/' element={home/>}/>
     <Route path='/about' element={About/>}/>
     <Route path='/contact' element={Contact/>}/>
     <Route path='/login' element={Login/>}/>
     <Route path='/signup' element={Signup/>}/>

     
  </Routes>*/}
    
   
   {/*  <home/>
    <About/>
    
    <Contact/>
<Login/> */}
    <Signup/>

    </>
    
  );
}

export default App;
