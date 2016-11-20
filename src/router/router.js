import React from 'react';
import { Router, Route, IndexRoute, useRouterHistory, IndexRedirect } from 'react-router';
import { createHashHistory } from 'history';

const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });

import App from '../App';
import HomePage from '../pages/Home/Home.jsx';
import AboutPage from '../pages/About/About.jsx';
import ErrorPage from '../pages/Error/Error.jsx';

const Routes = (
  <Router history={appHistory}>
    <Route path = "/" component = {App}>
      <IndexRoute component = {HomePage} />
      <Route path = "home" component = {HomePage} />
      <Route path = "about" component = {AboutPage} />
    </Route>
    <Route path="*" component={ErrorPage}/>
  </Router>
);

export default Routes;
