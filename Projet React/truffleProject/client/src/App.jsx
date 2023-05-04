import React, { useState, useEffect } from "react";
import ActeDeDeces from "./component/ActeDeDeces"
import ActeDeNaissances from "./component/ActeDeNaissances";

function App() {

  return (
    <div>
      <ActeDeDeces/>
      <ActeDeNaissances/>
    </div>
  );
}

export default App;