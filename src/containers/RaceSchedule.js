import React, { Component, Fragment } from 'react';
import { getSeasonRaces } from '../api';
import RaceList from '../components/RaceList/RaceList';

class RaceSchedule extends Component {
  state = {
    races: [],
    seasonName: '',
  }

  componentDidMount() {
    getSeasonRaces()
      .then((results) => {
        this.setState({
          races: results.Races,
          seasonName: results.season,
        })
      })
      .catch(err => console.log(err));
  }

  render() {
    const { seasonName, races } = this.state;
    return (
      <Fragment>
        <h2> Season {seasonName} </h2>
        <RaceList races={races} />
      </Fragment>
    );
  }
}

export default RaceSchedule;
