import React from 'react';
import Greetings from './Greetings';
import Header from './Header';
import { Switch, Route } from 'react-router-dom';
import SignupPage from './signup/SignupPage'

class App extends React.Component {

  render() {
    return (
      <div className='container'>
        <Header />
        <Switch>
          <Route exact path='/' component={Greetings} />
          <Route path='/signup' component={SignupPage} />
        </Switch>
      </div>
    );
  }
}

export default App;