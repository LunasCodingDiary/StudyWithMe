///////////////////////LIBRARY ///////////////////////
import React, { useEffect, useState } from "react";
//import { useDispatch, useSelector } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";

/////////////////////// COMPONENT AND PAGES  /////////////////////
import Home from "./components/Home";
import InACafe from "./components/InACafe";
import ByTheSea from  "./components/ByTheSea";
import InTheLibrary from './components/InTheLibrary'

const Routes = () => {
    return(
        <>
        <Switch>
          <Route path="/home" component={Home} />
          <Route exact path="/" component={Home} />
          <Route exact path="/cafe" component={InACafe} />
          <Route exact path="/library" component={InTheLibrary} />
          <Route exact path="/bythesea" component={ByTheSea} />
        </Switch>
      </>

    )
}
////////////////////// EXPORT COMPONENT ///////////////////////////////
export default Routes;