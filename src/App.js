import './App.css';
import Navbar from './component/Navbar';
import { Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Tips from './pages/Tips';
import Meals from './pages/Meals';
import MealsDetail from './pages/MealsDetail'

function App() {
  return (
    <div className="wrap">
      <Navbar/>

      <main className="container">
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/meals' element={<Meals/>} />
          <Route path='/meals/:id' element={<MealsDetail/>} />
          <Route path='/tips' element={<Tips/>} />
          <Route path='/about' element={<About/>} />
        </Routes>
      </main>

      <footer className="site-footer">
        <small>&copy; {new Date().getFullYear()} MenuRoulette</small>
      </footer>
    </div>
  );
}

export default App;
