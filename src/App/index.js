import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import Notification from 'react-notify-toast';
import Header from '../components/Header';
import '../styles/main.css';
import history from '../commons/history';
import loginContainer from '../containers/loginContainer';
import SiginUpContainer from '../containers/signupContainer';
import QuestionContainer from '../containers/questionsContainer';


const App = () => (
  <Router history={history}>
    <React.Fragment>
      <Header />
      <Notification />
      <Switch>
        <Route path="/" component={loginContainer} exact />
        <Route path="/login" component={loginContainer} />
        <Route path="/signup" component={SiginUpContainer} />
        <Route path="/questions" component={QuestionContainer} />
      </Switch>
    </React.Fragment>
  </Router>
);

export default App;
