import './App.css'
import Header from './components/Header'
import { Routes, Route } from "react-router";
import Home from './pages/Home';
import About from './pages/About';

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
      </Routes>
    </>
  )
}

export default App
