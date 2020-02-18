import React from 'react';
import {Head} from "./components/Head"
import './App.css';
import{CarrouselMenu} from "./components/CarrouselMenu"
import{CarrouselMenu2} from "./components/CarrouselMenu2"
import Router from "./components/Router"

function App() {
  return (
    <div>

      <div class="">
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
