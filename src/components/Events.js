import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  card: {
      marginTop: 50,
      maxWidth: 345,
  },
  media: {
    height: 140,
  },
  padSpaceB: {
      height: 100,
  },
  padSpaceT: {
    height: 50,
  },
  fab: {
    position: 'fixed',
    bottom: theme.spacing.unit * 8,
    right: theme.spacing.unit * 2,
    visibility: 'hidden',
  },
});

function Events(props) {
  const { classes } = props;
  return (
    <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: '100vh' }}
    >
    <div className={classes.padSpaceT}></div>
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image= {require ("../images/ULA-Atlas-V.jpg")}
          title="ULA Delta IV WGS-10"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            ULA Delta IV WGS-10
          </Typography>
          <Typography component="p">
            United Launch Alliance (ULA) will launch the 10th Wideband Global SATCOM (WGS) spacecraft atop a Delta IV rocket. This geostationary... 
          </Typography>
          <Typography><b>When: </b>Mar 15, 2019 6:56 PM EDT</Typography>
          <Typography><b>Where: </b>Cape Canaveral Air Force Station SLC-37</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
            Buy Tickets
        </Button>
        <Button size="small" color="primary">
            Learn More
        </Button>
      </CardActions>
    </Card>

    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={require ("../images/Falcon Heavy launching 400 x 600.jpg")}
          title="SpaceX Falcon Heavy Arabsat 6A"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            SpaceX Falcon Heavy Arabsat 6A
          </Typography>
          <Typography component="p">
            A SpaceX Falcon Heavy rocket will launch the Arabsat 6A communications satellite, built by Lockheed Martin, from Kennedy Space Center... 
          </Typography>
          <Typography><b>When: </b>NET March 2019</Typography>
          <Typography><b>Where: </b>Kennedy Space Center LC-39A</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
            Buy Tickets
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>

    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={require ("../images/commercial-crew-boeing-uncrewed.jpg")}
          title="Commercial Crew Boeing Orbital Flight Test"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Commercial Crew Boeing Orbital Flight Test
          </Typography>
          <Typography component="p">
             It is time for a new era of space exploration where astronauts once again launch into space from American soil. Under the Commercial...
          </Typography>
          <Typography><b>When: </b>NET April 2019</Typography>
          <Typography><b>Where: </b>Cape Canaveral Air Force Station SLC-41</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
            Buy Tickets
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>

    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={require ("../images/commercial-crew-spacex-crewed.jpg")}
          title="Commercial Crew SpaceX Demonstration Mission 2"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Commercial Crew SpaceX Demonstration Mission 2
          </Typography>
          <Typography component="p">
            The Commercial Crew Program brings a new era of space exploration to the Space Coast of Florida. For this historic mission, Americans...
          </Typography>
          <Typography><b>When: </b>TBD July 2019</Typography>
          <Typography><b>Where: </b>Kennedy Space Center LC-39A</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
            Buy Tickets
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
    <div className={classes.padSpaceB}></div>
    </Grid>
  );
}

Events.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Events);