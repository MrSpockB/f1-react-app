import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import {
  Link,
} from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { Drawer } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PersonIcon from '@material-ui/icons/Person';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import EqualizerIcon from '@material-ui/icons/Equalizer';

const styles = {
  list: {
    width: 250,
  },
  link: {
    textDecoration: 'none',
    color: '#333',
  },
};

const Menu = ({ open, toggleDrawer, classes }) => (
  <Drawer open={open} onClose={() => toggleDrawer(false)}>
    <div
      tabIndex={0}
      role="button"
      onClick={() => toggleDrawer(false)}
      onKeyDown={() => toggleDrawer(false)}
    >
      <div className={classes.list}>
        <List>
          <Fragment>
            <ListItem button>
              <ListItemIcon>
                <CalendarTodayIcon />
              </ListItemIcon>
              <ListItemText>
                <Link className={classes.link} to="/race-schedule">Race Schedule</Link>
              </ListItemText>
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <PersonIcon />
              </ListItemIcon>
              <ListItemText>
                <Link className={classes.link} to="/driver-standings">Driver Standings</Link>
              </ListItemText>
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <EqualizerIcon />
              </ListItemIcon>
              <ListItemText>
                <Link className={classes.link} to="/constructor-standings">Constructor Standings</Link>
              </ListItemText>
            </ListItem>
          </Fragment>
        </List>
      </div>
    </div>
  </Drawer>
);

Menu.propTypes = {
  classes: PropTypes.object.isRequired,
  open: PropTypes.bool.isRequired,
  toggleDrawer: PropTypes.func.isRequired,
};

export default withStyles(styles)(Menu);

