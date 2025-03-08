import React from "react";
import Header from "../Components/Header";
import CalculatorGrid from "../Components/CalculatorGrid";

function HomePage() {
  return (
    <div className="w-full">
      <Header />
      <CalculatorGrid />
    </div>
  );
}

export default HomePage;