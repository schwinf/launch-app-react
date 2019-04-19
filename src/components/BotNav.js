import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

import EventsIcon from '@material-ui/icons/EventNote';
import PurchasesIcon from '@material-ui/icons/LocalActivity';
import CartIcon from '@material-ui/icons/ShoppingCart';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Signup from './Signup';
import Login from './Login';
import Events from './Events';
import Forgot from './Forgot';
import Tickets from './Tickets';



const styles = {
  root: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
    zIndex: 5,
  },
};

class BotNav extends React.Component {
  state = {
    auth: false,
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <Router>
          <div>
          <BottomNavigation
              value={value}
              onChange={this.handleChange}
              showLabels
              className={classes.root}
          >
              <BottomNavigationAction label="Events" icon={<EventsIcon />} to='/events' component={Link}/>
              <BottomNavigationAction label="Your Tickets" icon={<PurchasesIcon />} to='/tickets' component={Link}/>
              <BottomNavigationAction label="Cart" icon={<CartIcon />} to='/signup' component={Link} />
          </BottomNavigation> 
          <div>
          <Switch>
            <Route exact path='/' component={Signup} />
              <Route exact path='/events' component={Events} />
              <Route exact path='/signup' component={Signup} />
              <Route exact path='/login' component={Login} />
              <Route exact path='/home' component={BotNav} />
              <Route exact path='/forgotpassword' component={Forgot} />
              <Route exact path='/tickets' component={Tickets} />
          </Switch>
          </div>
          </div>
      </Router>
    );
  }
}

BotNav.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BotNav);