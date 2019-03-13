import React, { Component } from "react";
import JssProvider from "react-jss/lib/JssProvider";
import MaterialUIForm from "react-material-ui-form";
import Navbar from "../components/Navbar";
import Grid from "@material-ui/core/Grid";
import Icon from "@material-ui/core/Icon";
import { FormComponent, FormContainer } from "react-authorize-net";
import AddGroupMember from "../components/AddGroupMember";
import ReactAuthorizeForm from "../components/React-Authorize.js";
//Material UI Components
import { withStyles, Button, TextField } from "@material-ui/core";
import { EditorFormatLineSpacing } from "material-ui/svg-icons";

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2
  },
  submitBtn: {
    position: "relative",
    left: "15%",
    width: "500px"
  },
  inputs: {
    width: "315px",
    margin: "10px",
    fontFamily: 'Pathway Gothic One, sans-serif'
  },
  registrationForm: {
    width: "60%",
    margin: "0 auto"
  },
  icon: {
    color: "gray",
    fontSize: "90%",
    position: "relative",
    top: "25px",
    margin: "5px"
  },
  legend: {
    fontSize: "200%",
    fontFamily: 'Pathway Gothic One, sans-serif'
  },
  addUserBtn: {
    backgroundColor: "lightgray",
    textAlign: "center"
  },
  addIcon: {
    fontSize: "20px",
    margin: "5px"
  },
  hr: {
    height: "2px",
    border: "none",
    color: "gray",
    backgroundColor: "gray"
  },
  button: {
    borderRadius: "50%"
  },
  description: {
    textAlign: "center",
    width: "100%",
    opacity: "0.5",
    borderTop: "3px solid gray",
    borderBottom: "3px solid gray",
    fontFamily: 'Pathway Gothic One, sans-serif',
    fontSize:'150%'
  }
});

class RegistrationForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tierName: "",
      price: "",
      subscription: {
        duration: "",
        cost: 0,
        userType: ""
      },
      addUser: false,
      userCount:[]
    };
  }

  componentDidMount() {
    this.setState({
      tierName: this.props.location.state.tierName,
      price: this.props.location.state.cost,
      subscription: {
        duration: this.props.location.state.duration,
        price: this.props.location.state.cost,
        userType: this.props.location.state.userType
      }
    });
    console.log(this.props.location.state.tierName);
    console.log(this.props.location.state.cost);
    console.log(this.props.location.state.duration);
    console.log(this.props.location.state.userType);
  }

  submit = (values, pristineValues) => {
    console.log(values);
  };

  customInputHandler = (value, { first, last, first1 }, event) => {};

  addUser = () => {
    this.setState({
      addUser: true,
      userCount:[...this.state.userCount,<AddGroupMember/>]
    });

    
  };

  render() {
    const { classes, pageInfo } = this.props;
  
    return (
      <div>
        <Navbar
          name={this.props.location.state.duration + " " + "Subscription Basis"}
        />
        <br />

        <JssProvider>
          <MaterialUIForm
            className={classes.registrationForm}
            onSubmit={this.submit}
          >
            <fieldset>
              <legend className={classes.legend}>
                {this.state.tierName} Registration
              </legend>
              <div className={classes.description}>
                <h4>Subscription Details</h4>
                <h5>Tier: {this.state.tierName}</h5>
                <h5>Duration: {this.props.location.state.duration}</h5>
                <h5>User Type: {this.state.subscription.userType}</h5>
                <h5>Price: $ {this.props.location.state.cost}</h5>
              </div>

              <Grid container>
                <Grid item={6}>
                  <Icon className={classes.icon}>account_circle</Icon>
                  <TextField
                    className={classes.inputs}
                    label="First Name"
                    type="text"
                    name="first"
                    value=""
                    fullWidth
                    data-validators="isRequired"
                    onChange={this.customInputHandler}
                  />
                </Grid>
                <Grid item={6}>
                  <Icon className={classes.icon}>account_circle</Icon>
                  <TextField
                    className={classes.inputs}
                    label="Last Name"
                    type="text"
                    name="last"
                    value=""
                    data-validators="isRequired"
                    onChange={this.customInputHandler}
                  />
                </Grid>
                <br />
                <br />
                <br />
                <Grid item={6}>
                  <Icon className={classes.icon}>mail</Icon>

                  <TextField
                    className={classes.inputs}
                    label="Email"
                    type="email"
                    name="email"
                    value=""
                    data-validators="isRequired,isEmail"
                    onChange={this.customInputHandler}
                  />
                </Grid>
                <br />
                <br />
                <br />
                <Grid item={6}>
                  <Icon className={classes.icon}>account_circle</Icon>
                  <TextField
                    className={classes.inputs}
                    label="User Name"
                    type="text"
                    name="userName"
                    value=""
                    data-validators="isRequired"
                    onChange={this.customInputHandler}
                  />
                </Grid>
                <br />
                <br />
                <br />

                <Grid item={6}>
                  <Icon className={classes.icon}>lock</Icon>
                  <TextField
                    className={classes.inputs}
                    label="Password"
                    type="password"
                    name="password"
                    value=""
                    data-validators={[
                      {
                        isLength: {
                          min: 6,
                          max: 16
                        }
                      },
                      "isAlias"
                    ]}
                    onChange={this.customInputHandler}
                  />
                </Grid>
                <Grid item={6}>
                  <Icon className={classes.icon}>lock</Icon>
                  <TextField
                    className={classes.inputs}
                    label="Confirm Password"
                    type="password"
                    name="passwordConfirm"
                    value=""
                    data-validators={[
                      {
                        isLength: {
                          min: 6,
                          max: 16
                        }
                      },
                      "isAlias"
                    ]}
                    onChange={this.customInputHandler}
                  />
                </Grid>
                <Grid item={6}>
          <TextField
            className={classes.inputs}
            label="Company Name"
            type="text"
            name="companyName1"
            value={this.state.companyName1}
            data-validators="isRequired"
            onChange={this.inputChange}
          />
        </Grid>
        <Grid item={6}>
          <TextField
            className={classes.inputs}
            label="Job Title"
            type="text"
            name="jobTitle"
            value={this.state.jobTitle}
            data-validators="isRequired"
            onChange={this.inputChange}
          />
        </Grid>
        <Grid item={6}>
          <TextField
            className={classes.inputs}
            label="Years Of Industry Experience"
            type="text"
            name="yoie"
            value={this.state.yoie}
            data-validators="isRequired"
            onChange={this.inputChange}
          />
        </Grid>
              </Grid>
              <br />
              <br />
              {this.state.subscription.userType === "Multi" ? (
                <Button variant="outlined" size="large" color="primary" onClick={this.addUser} className={classes.addUserBtn}>
                  <Icon className={classes.addIcon}>group_add</Icon>
                  Add Users
                </Button>
              ) : (
                false
              )}
              {this.state.addUser === true ? (
                  <div>
                    {this.state.userCount.map(user=>user)}
                   
                
                </div>
                
              ) : (
              false
              )}

              <br />
              <br />
              <FormContainer
                environment="sandbox"
                onError={this.onErrorHandler}
                onSuccess={this.onSuccessHandler}
                amount={this.state.price}
                component={FormComponent}
              />

              <Button
                className={classes.submitBtn}
                variant="outlined"
                type="submit"
              >
                <Icon>send</Icon>
                  Submit
              </Button>
            </fieldset>
          </MaterialUIForm>
        </JssProvider>
      </div>
    );
  }
}

export default withStyles(styles)(RegistrationForm);
