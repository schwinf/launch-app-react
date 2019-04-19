import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import PlaceIcon from '@material-ui/icons/Place';
import Calendar from '@material-ui/icons/CalendarToday';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    marginLeft: "10px",
    marginRight: "10px",
  },
  topSpace: {
      height: 100,
  }
});

function Tickets(props) {
  const { classes } = props;

  return (
    
    <div>
      <div className={classes.topSpace}></div>
      <Paper className={classes.root} elevation={1}>
        <Typography variant="h5" component="h3">
          ULA Delta IV WGS-10
        </Typography>
        <Typography component="p">
          <Calendar />Mar 15, 2019 6:56 PM EDT
        </Typography>
        <Typography component="p">
          <PlaceIcon />Cape Canaveral Air Force Station SLC-37
        </Typography>
      </Paper>
    </div>
  );
}

Tickets.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Tickets);