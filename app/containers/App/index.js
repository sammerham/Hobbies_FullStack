/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import NewHobbyPage from 'containers/NewHobbyPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import NavBar from '../../components/NavBar/index';
import GlobalStyle from '../../global-styles';

//  *  App ---> NavBar, Routes
export default function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/new" component={NewHobbyPage} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </div>
  );
}
