import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Homepage from "./Pages/Homepage/Homepage";
import Contact from "./Pages/Contact/Contact";
import Shop from "./Pages/Shop/Shop";
import Dial from "./Components/SpeedDial/SpeedDial";
import About from "./Pages/About/About";
import ParticlesBg from 'particles-bg';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <>
      <ParticlesBg num={1} height="100%" type="color" bg={true} />
      <Navbar />
      <Router>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/Contact" element={<Contact />} />
          <Route exact path="/Shop" element={<Shop />} />
          <Route exact path="/About" element={<About />} />
        </Routes>
      </Router>
      <Dial />
      <Footer />
    </>
  );
}

export default App;
