import React from 'react';
import {Head} from "./components/Head"
import './App.css';
import{CarrouselMenu} from "./components/CarrouselMenu"
import{CarrouselMenu2} from "./components/CarrouselMenu2"
import Router from "./components/router"

function App() {
  return (
    <div>

      <div class="menu">
        <Head/>
      </div>

      <Router />
    </div>

  );
}

export default App;
