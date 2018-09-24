import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import Header from './components/Header';
import RaceSchedule from './containers/RaceSchedule'
import DriverStandings from './containers/DriverStandings'
import ConstructorStandings from './containers/ConstructorStandings'


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route path="/race-schedule" component={RaceSchedule} />
            <Route path="/driver-standings" component={DriverStandings} />
            <Route path="/constructor-standings" component={ConstructorStandings} />
            <Redirect to="/race-schedule" />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
