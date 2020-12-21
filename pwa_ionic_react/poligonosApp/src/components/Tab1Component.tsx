import Tab1 from "../pages/Tab1";
import DashboardPage from "../pages/DashboardPage";
import LoginPage from "../pages/LoginPage";
import { Route } from "react-router-dom";
import React from "react";

function Tab1Component(props){
  <Route
    path="/tab1"
    component={Tab1}
    exact={true}
    render={props => {
    // const isAuthed = true;
    return props.isAuthed ? <DashboardPage {...props} /> : <LoginPage />;}
    }
  />
};

export default Tab1Component;
