import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const styles = theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  details: {
    flexDirection: 'column',
  },
});

const RaceList = ({ races, classes }) => (
  <div className={styles.root}>
    { races.map(race => (
      <ExpansionPanel key={race.date}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>{race.raceName}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.details}>
          <Typography>
            Round #{race.round}
          </Typography>
          <Typography>
            Date: {race.date}
          </Typography>
          <Typography>
            Time: {race.time}
          </Typography>
          <Typography>
            Circuit: {race.Circuit.circuitName}
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    ))
    }
  </div>
);

RaceList.propTypes = {
  classes: PropTypes.object.isRequired,
  races: PropTypes.array.isRequired,
};

export default withStyles(styles)(RaceList);
