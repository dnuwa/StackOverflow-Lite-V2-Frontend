import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import TestComp from './components/TestComp';


const App = () => (
  <Router>
    <React.Fragment>
		<TestComp />
    </React.Fragment>
  </Router>
);

export default App;
