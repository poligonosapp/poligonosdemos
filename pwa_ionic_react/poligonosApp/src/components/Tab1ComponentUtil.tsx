import Tab1 from "../pages/Tab1";
import DashboardPage from "../pages/DashboardPage";
import LoginPage from "../pages/LoginPage";
import { Route } from "react-router-dom";
import React from "react";

function Tab1ComponentUtil(_props){
  <Route
    path="/tab1"
    component={Tab1}
    exact={true}
    render={props => {
    // const isAuthed = true;
    return _props.isAuthed ? <DashboardPage {...props} /> : <LoginPage />;
  }
    }
  />
};

export default Tab1ComponentUtil;
