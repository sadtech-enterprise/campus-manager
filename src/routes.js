import React from "react";
import { Switch, Route } from "react-router-dom";
import requireAuth from "./Auth";

import Landing from './components/pages/Landing/Landing';
import Campuses from "./components/pages/Campuses/Campuses";
import Cohorts from "./components/pages/Cohorts/Cohorts";
import Students from "./components/pages/Students/Students";
import Login from "./components/pages/Login/Login";
import Instructors from './components/pages/Instructors/Instructors';


export const routes = (
  <Switch>
    <Route exact path="/" render={() => <Landing />} />
    <Route path="/campuses" render={() => <Campuses />} />
    <Route path="/instructors" render={() => <Instructors />} />
    <Route path="/cohorts" render={() => <Cohorts />} />
    <Route path="/students" render={() => <Students />} />
    <Route path="/login" render={() => <Login />} />
  </Switch>
);
