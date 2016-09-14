import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import App from '../components/App';
import Home from '../components/Home';
import Login from '../components/Login';


const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Login}/>
      <Route path="home" component={Home}/>
    </Route>
  </Router>
)

export default routes;
