import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import App from '../components/App';
import Home from '../components/home';
import Details from '../components/details';
import Login from '../components/login';
import Dog from '../components/Dog';


const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Login}/>
      <Route path="dog" component={Dog}/>
      <Route path="home" component={Home}/>
       <Route path="/details" component={Details}/>
    </Route>
  </Router>
)

export default routes;
