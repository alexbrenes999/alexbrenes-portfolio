import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/navbar';
import Landing from './pages/landing';


function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Landing/>}/>
          <Route />
          <Route />
          <Route />
        </Routes>
      </Router>
    </div>
)};

export default App;