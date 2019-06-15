import React from 'react';
import logo from './logo.svg';
import  './App.css';
import Demo2 from "./demo2";
import Demo1 from "./demo1";
import Counter from "./counter";
import Datetime from "./datetime";
import Toggle from "./toggle";
import Input from "./input";
import Cyclelife from "./cyclelife";
import DEMO3 from "./DEMO3"

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
        
    //   </header>
    //   {/* <Demo2 title="iti" /> */}
    //   {/* <Demo1  /> */}
    // </div>
    <div>
      <Counter />
      <Datetime />
      <Toggle />
      <Cyclelife />
      <Input />
     <DEMO3>vfff</DEMO3>
    </div>
  );
}

export default App;
