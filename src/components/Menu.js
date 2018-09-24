import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Drawer } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const styles = {
  list: {
    width: 250,
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
              <ListItemText primary="Races" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Standings" />
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

