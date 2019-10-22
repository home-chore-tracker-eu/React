import React from 'react';
import { useSelector } from "react-redux";
import './App.css';

function App() {
  //testing the store
  console.log(useSelector(state => state.families.families))

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
