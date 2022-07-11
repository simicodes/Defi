import About from "./components/About";
import Developers from "./components/Developers";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Subscribe from "./components/Subscribe";
import Platform from "./components/Platform";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Platform />} />
          <Route path="/about" element={<About />} />
          <Route path="/developers" element={<Developers />} />
          <Route path="/community" element={<Subscribe />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
