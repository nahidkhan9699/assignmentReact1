import React from "react";

import { Hyundai } from "./components/Hyundai";
import { Maruti } from "./components/Maruti";
function App(){
  return(
    <div>
    <Hyundai/>

    <Maruti/>
      <Hyundai />

      <Maruti />
      <Maruti />

    
    </div>
  )
};
export default App;