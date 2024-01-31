import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/pages/home';
import About from './components/pages/about';
import Contact from './components/pages/contact';
import Navbar from './components/navbar/navbar';
import Pnf from './components/pnf/pnf';
import Users from './components/users';


function App() {
  return (
    <div>
      {/* <Navbar/> */}
      <Routes>
        <Route path='/:userName' element={<Navbar><Users/></Navbar>}/>
        <Route path='/home' element={<Navbar><Home/></Navbar>}/>
        <Route path='/about' element={<Navbar><About/></Navbar>}/>
        <Route path='/contact' element={<Navbar><Contact/></Navbar>}/>
        <Route path='/' element={<Navbar/>}/>
        <Route path='*' element={<Pnf/>}/>
      </Routes>
    </div>
  );
}

export default App;
