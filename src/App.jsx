import React from "react";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Hero from "./Components/Hero";
import Mywork from "./Components/Mywork";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Mywork />
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;
