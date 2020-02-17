import React from 'react';
import {Head} from "./components/Head"
import './App.css';
import {Formulaire} from  "./components/Formulaire"
import{CarrouselMenu} from "./components/CarrouselMenu"

function App() {
  return (
    <div>
      <Head/>
      <Formulaire></Formulaire>
      <CarrouselMenu/>
      
    </div>
  );
}

export default App;
