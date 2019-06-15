import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from "./home";
import Demo1 from "./demo1";
import Demo2 from "./demo2";
import Counter from "./counter";
import Error1 from "./error";
import Try1 from "./try";

import {BrowserRouter,Route,Switch} from "react-router-dom";

import * as serviceWorker from './serviceWorker';


//=====================================

// var temple=React.createElement("div", {
//     class: "class1"
//   }, React.createElement("p", null, "hello iti"));
  
//   ReactDOM.render(temple, document.getElementById('root'));

//======================================
// var x=1;
// var jsx=(<div>
//     <h1>{x}</h1>
//     <h2>{x+1}</h2>
//     <h3>{x>1?"hello":"bye"}</h3>
//     </div>)
//    ReactDOM.render(jsx, document.getElementById('root'));

const Routes=(
  <BrowserRouter>
  <Switch>
    <Route path="/" component={Home} exact />
    <Route path="/demo1" component={Demo1} />
    <Route path="/demo2" component={Demo2} />
    <Route path="/counter" component={Counter} />
    <Route path="/try/:id" component={Try1} />
    <Route component={Error1} />
</Switch>

  </BrowserRouter>
)


ReactDOM.render(Routes, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
