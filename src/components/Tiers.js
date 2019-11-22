import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import tierDatas from "./TierDatas";
import { Link } from "react-router-dom";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    height: 140,
    width: 100
  },
  header: {
    textAlign: "center",
    marginRight: "10px",
    fontFamily: "'Pathway Gothic One', sans-serif",
    fontSize:"40px",
    letterSpacing:"3px",
  },
  center: {
    textAlign: "right",
    fontFamily: "'Pathway Gothic One', sans-serif",
    left: "30px",
    fontSize:"34px",
    display:"flex",
    justifyContent:"center",
    
  },
  control: {
    padding: theme.spacing.unit * 2
  },
  Free: {
    fontFamily: "'Pathway Gothic One', sans-serif"
  },

  Rectangle: {
    width: "171.5px",
    height: "253.4px",
    boxShadow: "0 2px 18px 0 rgba(0, 0, 0, 0.1)",
    backgroundColor: "#ffffff"
  },
  Button: {
    margin: "10px"
  },
  price: {
    width: " 38px",
    height: " 47px",
    fontFamily: "Montserrat",
    fontSize: " 34.9px",
    fontWeight: " bold",
    fontStyle: "normal",
    fontStretch: "normal",
    lineHeight: "normal",
    letterSpacing: "normal",
    textAlign: "center",
    color: "#242f40"
  },
  card: {
    fontFamily: "'Pathway Gothic One', sans-serif"
  },
  container: {
    width: "85vw",
    height: "80vh",
    fontFamily: "'Pathway Gothic One', sans-serif",
    borderRadius: "6px",
    color: "white",
    backgroundColor: "#2f4c6e",
    border: "1px solid lightgray",
    margin: "0 auto"
  },
  links: {
    color: "#424242",
    textDecoration: "none",
    fontSize: "125%",
    fontFamily: "Pathway Gothic One, sans-serif"
  }
});

class PricingCards extends Component {
  constructor(props) {
    super(props);

    this.state = {
      annual: false,
      monthly: false,
      weekly: true
    };
  }

  showTier = e => {
    switch (e.target.textContent) {
      case "Weekly":
        this.setState({
          weekly: true,
          monthly: false,
          annual: false
        });
        break;
      case "Monthly":
        this.setState({
          weekly: false,
          monthly: true,
          annual: false
        });
        break;

      case "Annually":
        this.setState({
          weekly: false,
          monthly: false,
          annual: true
        });
    }
  };

  render() {
    let { classes } = this.props;
    return (
      <div className={classes.container}>
        <h2 className={classes.header}>Pricing</h2>
        <Grid container>
          <Grid item xs={5} />
          <p className={classes.center}> Select your pricing tier</p>
          <Grid item xs={12} />
          <Grid item xs={4} />
          <Button
            className={classes.Button}
            size="large"
            color="inherit"
            variant="outlined"
            fullwidth
            type="Weekly"
            onClick={e => {
              this.showTier(e);
            }}
          >
            Weekly
          </Button>
          <Button
            className={classes.Button}
            size="large"
            color="inherit"
            variant="outlined"
            fullwidth
            type="Monthly"
            onClick={e => {
              this.showTier(e);
            }}
          >
            Monthly
          </Button>
          <Button
            className={classes.Button}
            size="large"
            color="inherit"
            variant="outlined"
            fullwidth
            onClick={e => {
              this.showTier(e);
            }}
          >
            Annually
          </Button>
        </Grid>

        <Grid container spacing={12}>
          {this.state.weekly
            ? tierDatas[0].map((card, i) => {
                return (
                  <Grid className={classes.Rectangle} item xs={3}>
                    <Card className={classes.card}>
                      <CardActionArea>
                        <CardContent>
                          <Typography
                            className={classes.free}
                            gutterBottom
                            variant="h5"
                            component="h2"
                          >
                            {card.title}
                          </Typography>

                          <Typography component="p">
                            {" "}
                            <h3>${card.price}</h3>
                            <small className={classes.Free}>
                              Try for 7 days
                            </small>
                          </Typography>
                          <br />
                          <Typography className={classes.Free} component="p">
                            {card.description}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                      <CardActions>
                        <Grid item xs={1} />
                        <Button
                          className={classes.Free}
                          color="inherit"
                          variant="outlined"
                          fullwidth
                        >
                          <Link
                            className={classes.links}
                            to={{
                              pathname: "/acquire",
                              state: {
                                tierName: card.title,
                                cost: card.price,
                                duration: card.duration,
                                userType:
                                  card.type === "Multi" ? "Multi" : "Single"
                              }
                            }}
                          >
                            Sign up for {card.title}
                          </Link>
                        </Button>
                      </CardActions>
                    </Card>
                  </Grid>
                );
              })
            : this.state.monthly
            ? tierDatas[1].map((card, i) => {
                return (
                  <Grid className={classes.Rectangle} item xs={3}>
                    <Card className={classes.card}>
                      <CardActionArea>
                        <CardContent>
                          <Typography
                            className={classes.free}
                            gutterBottom
                            variant="h5"
                            component="h2"
                          >
                            {card.title}
                          </Typography>

                          <Typography component="p">
                            {" "}
                            <h3>${card.price}</h3>
                            <small className={classes.Free}>
                              {card.duration}
                            </small>
                          </Typography>
                          <br />
                          <Typography className={classes.Free} component="p">
                            {card.description}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                      <CardActions>
                        <Grid item xs={1} />
                        <Button
                          className={classes.Free}
                          color="inherit"
                          variant="outlined"
                          fullwidth
                        >
                          <Link
                            className={classes.links}
                            to={{
                              pathname: "/acquire",
                              state: {
                                tierName: card.title,
                                cost: card.price,
                                duration: card.duration,
                                userType:
                                  card.type === "Multi" ? "Multi" : "Single"
                              }
                            }}
                          >
                            Sign up for {card.title}
                          </Link>
                        </Button>
                      </CardActions>
                    </Card>
                  </Grid>
                );
              })
            : this.state.annual
            ? tierDatas[2].map((card, i) => {
                return (
                  <Grid className={classes.Rectangle} item xs={3}>
                    <Card className={classes.card}>
                      <CardActionArea>
                        <CardContent>
                          <Typography
                            className={classes.free}
                            gutterBottom
                            variant="h5"
                            component="h2"
                          >
                            {card.title}
                          </Typography>

                          <Typography component="p">
                            {" "}
                            <h3>${card.price}</h3>
                            <small className={classes.Free}>
                              {card.duration}
                            </small>
                          </Typography>
                          <br />
                          <Typography className={classes.Free} component="p">
                            {card.description}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                      <CardActions>
                        <Grid item xs={1} />
                        <Button
                          className={classes.Free}
                          color="inherit"
                          variant="outlined"
                          fullwidth
                        >
                          <Link
                            className={classes.links}
                            to={{
                              pathname: "/acquire",
                              state: {
                                tierName: card.title,
                                cost: card.price,
                                duration: card.duration,
                                userType:
                                  card.type === "Multi" ? "Multi" : "Single"
                              }
                            }}
                          >
                            Sign up for {card.title}
                          </Link>
                        </Button>
                      </CardActions>
                    </Card>
                  </Grid>
                );
              })
            : false}
        </Grid>
      </div>
    );
  }
}

PricingCards.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PricingCards);
