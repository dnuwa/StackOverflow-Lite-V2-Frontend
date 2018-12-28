import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import Home from '../components/TestComp';
import history from '../commons/history';


const App = () => (
  <Router history={history}>
    <React.Fragment>
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </React.Fragment>
  </Router>
);

export default App;
