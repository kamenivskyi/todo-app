import React from 'react';
import { Switch, Route, useLocation, Redirect } from 'react-router-dom';

import HomePage from './pages/HomePage';
import CurrentListPage from './pages/CurrentListPage/CurrentListPage';
import AllTodosPage from './pages/AllTodosPage/AllTodosPage';

export const Routes = () => {
  const location = useLocation();

  return (
    <Switch>
      {location.pathname === '/' && <Redirect to='/tasks' />}
      <Route exact component={HomePage} path='/tasks' />
      <Route exact component={AllTodosPage} path='/all' />
      <Route component={CurrentListPage} path='/lists/:id' />
    </Switch>
  );
}