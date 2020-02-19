import React from 'react';
import { Head } from "./components/Head"
import './App.css';
import { CarrouselMenu } from "./components/CarrouselMenu"
import { CarrouselMenu2 } from "./components/CarrouselMenu2"
import Router from "./components/router"
import { Footer } from "./components/Footer"

function App() {
  return (
    <div>

      <div class="menu">
        <Head />
      </div>

      <Router />

      <div class="footer">
        <Footer />
      </div>
      
    </div>
  );
}

export default App;
