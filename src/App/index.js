import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import Notification from 'react-notify-toast';
import Header from '../components/Header';
import '../styles/main.css';
import history from '../commons/history';
import loginContainer from '../containers/loginContainer';


const App = () => (
  <Router history={history}>
    <React.Fragment>
      <Header />
      <Notification />
      <Switch>
        {/* <Route path="/" component={Home} /> */}
        <Route path="/" component={loginContainer} />
      </Switch>
    </React.Fragment>
  </Router>
);

export default App;
