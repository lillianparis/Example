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
  let config = {
    num: [4, 7],
    rps: 0.1,
    radius: [5, 40],
    life: [1.5, 3],
    v: [2, 3],
    tha: [-40, 40],
    // body: "./img/icon.png", // Whether to render pictures
    // rotate: [0, 20],
    alpha: [0.6, 0],
    scale: [1, 0.1],
    position: {x:1, y:1, width: 1000, height: 1000}, // all or center or {x:1,y:1,width:100,height:100}
    color: ["random", "#ff0000"],
    cross: "dead", // cross or bround
    random: 15,  // or null,
    g: 5,    // gravity
    // f: [2, -1], // force
    onParticleUpdate: (ctx, particle) => {
        ctx.beginPath();
        ctx.rect(particle.p.x, particle.p.y, particle.radius * 2, particle.radius * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
        ctx.closePath();
        console.log("ami working");
    }
  };
  return (
    <>
      <ParticlesBg num={1} config={config} type="color" bg={true} />
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
