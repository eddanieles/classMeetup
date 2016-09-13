import React from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import App from '../components/App';
import Home from '../components/home';
import Details from '../components/details';
import Login from '../components/Login';


const routes = (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Login}/>
      <Route path="home" component={Home}/>
       <Route path="/details" component={Details}/>
    </Route>
  </Router>
)

export default routes;
