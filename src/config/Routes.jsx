import React from "react";
import {
  Route,
  Switch
} from "react-router-dom";

//component pages
import Catalog from "../pages/Catalog";
import Detail from "../pages/Detail";
import Home from "../pages/Home";

const Routes = () => {
  return (
      <Switch>
        <Route 
          path='/:category/search/:keyword' 
          component = {Catalog}
        />
        <Route 
          path='/:category/:id' 
          component = {Detail}
        />
        <Route 
          path='/:category' 
          component = {Catalog}
        />
        <Route 
          path='/' 
          exact
          component = {Home}
        />
      </Switch>
  );
}

export default Routes
