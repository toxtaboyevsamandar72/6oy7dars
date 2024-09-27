import './App.css';
import { Routes, Route, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Gallery from './pages/Gallery';

function App() {
  return (
    <div className='app'>
      <header>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/About'>About</NavLink>
        <NavLink to='/Products'>Products</NavLink>
        <NavLink to='/Gallery'>Gallery</NavLink>
      </header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Products' element={<Products />} />
        <Route path='/Gallery' element={<Gallery />} />
      </Routes>
    </div>
  );
}

export default App;
