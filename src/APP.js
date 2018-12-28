import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import Header from './components/TestComp';


const App = () => (
  <Router>
    <React.Fragment>
		<Header />
    </React.Fragment>
  </Router>
);

export default App;
