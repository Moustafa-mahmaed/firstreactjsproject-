import React from 'react';
import {BrowserRouter,Route} from "react-router-dom";
import Home from "./home";

const routes=(
  <BrowserRouter>
    <Route path="/" component={Home} />
  </BrowserRouter>
)

export default routes;
