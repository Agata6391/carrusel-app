import React from "react";
import ImageCarousel from "./components/Carousel";
import './App.css';

function App(){
  return (
    <div className="App">
      <header className="App-header">
        <h1>Carrusel de imagenes en React</h1>
      </header>
      <main>
        <ImageCarousel/>
      </main>
    </div>
  );
}

export default App;