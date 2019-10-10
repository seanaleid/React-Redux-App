import React from 'react';
import './App.css';

import BeerList from "./components/BeerList";

function App() {
  return (
    <div className="App">
      <h1>Hello world! <span role="img" aria-label="North and South America world emoji">🌎</span> </h1>
      <BeerList />
    </div>
  );
}

export default App;
