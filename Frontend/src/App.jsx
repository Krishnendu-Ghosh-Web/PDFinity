import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="pt-20 flex-grow">
        <Home />
      </div>
      <Footer />
    </div>
  );
}

export default App;
