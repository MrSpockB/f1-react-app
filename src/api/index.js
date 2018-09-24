const endpointURL = 'http://ergast.com/api/f1';

export const getSeasonRaces = (year = 'current') => {
  const url = `${endpointURL}/${year}.json`;
  return fetch(url)
    .then(resp => resp.json())
    .then(data => data.MRData.RaceTable);
};

export const getDriverStandings = (year = 'current', raceNumber) => {
  const url = `${endpointURL}/${year}/${raceNumber}/driverStandings.json`;
  return fetch(url)
    .then(resp => resp.json());
};

export const getConstructorStandings = (year = 'current', raceNumber) => {
  const url = `${endpointURL}/${year}/${raceNumber}/constructorStandings.json`;
  return fetch(url)
    .then(resp => resp.json());
};
