import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/login/Login';
//import SignUp from './components/SignUp';

function App() {
  return (
    <>
      <div className='app'>
        <Router>
          <Switch>
            <Route exact path='/' component={Login} />
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;
