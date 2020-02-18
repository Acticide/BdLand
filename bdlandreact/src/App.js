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

      <div class="">
        <CarrouselMenu/>
        <CarrouselMenu2/>
      </div>
    </div>

  );
}

export default App;
