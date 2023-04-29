import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/navbar';
import Landing from './pages/landing';
import Portfolio from './pages/portfolio';


function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Landing/>}/>
          <Route path='/porfolio' element={<Portfolio/>} />
          <Route />
          <Route />
        </Routes>
      </Router>
    </div>
)};

export default App;