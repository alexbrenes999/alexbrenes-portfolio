import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/navbar';
import Landing from './pages/landing';
import Portfolio from './pages/portfolio';
import About from './pages/about';
import Footer from './components/footer';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Landing/>}/>
          <Route path='/portfolio' element={<Portfolio/>} />
          <Route path='/about' element={<About/>}/>
          <Route />
        </Routes>
        <Footer/>
      </Router>
    </div>
)};

export default App;