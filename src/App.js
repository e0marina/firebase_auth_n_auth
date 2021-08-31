import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/login/Login';
import Register from './components/register/Register';
import Reset from './components/reset/Reset';
import Dashboard from './components/dashboard/Dashboard';

function App() {
  return (
    <>
      <div className='app'>
        <Router>
          <Switch>
            <Route exact path='/' component={Login} />
            <Route exact path='/register' component={Register} />
            <Route exact path='/reset' component={Reset} />
            <Route exact path='/dashboard' component={Dashboard} />
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;
