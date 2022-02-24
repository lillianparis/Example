import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Homepage from "./Pages/Homepage/Homepage";
import ParticlesBg from 'particles-bg';

function App() {
  return (
    <>
      <ParticlesBg num={1} type="color" bg={true} />
      <Navbar />
      <Router>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
