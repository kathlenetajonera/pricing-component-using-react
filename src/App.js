import React, { useState } from "react";
import './css/App.css';
import Header from "./Header";
import Container from './Container';

function App() {
  const [pricingType, setPricingType] = useState("monthly");

  return (
    <div className="App">
      <Header pricingType={pricingType} setPricingType={setPricingType} />
      <Container pricingType={pricingType} />
    </div>
  );
}

export default App;
