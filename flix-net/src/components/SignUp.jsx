import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
// import logo from '../SVG/logo5.svg';


const useStyles = makeStyles((theme) => ({
  paper: {
    paddingTop: '10%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  linkText: {
    color: 'lightgrey',
    fontSize: '1.2em',
    cursor: 'pointer'
  },
  errorMSG: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: '1.1em',
    padding: '8px'
  },
  cssLabel: {
  },
  cssFocused: {
  },
  cssOutlinedInput: {
    '&$cssFocused $notchedOutline': {
    borderWidth: '2px',

    }
  },
  notchedOutline: {
    borderWidth: '1px',
  },
  logo: {
    width: '250px',
    height: '250px',
    marginBottom: '10px'
  }
}));


  /**
   * @description holds the signupform and has logic for validation and feedback if something is incorrect.
   * @param props - handleInputToNewUser() sends inputvalues to state in LoginScreencomponent.
   * @param props - signUp() signs up a new user. Adds it to the users array.
   * @param props - toggeleSignUp() for displaying this component or the Logincomponent. 
   * @returns JSX - the signupform.
   */
function SignUp(props) {
  
  const classes = useStyles();

  const [ showErrorSpanFirstName, setShowErrorSpanFirstName ] = useState(false);
  const [ showErrorSpanLastName, setShowErrorSpanLastName ]   = useState(false);
  const [ showErrorSpanEmail, setShowErrorSpanEmail ]         = useState(false);
  const [ showErrorSpanUserName, setShowErrorSpanUserName ]   = useState(false);
  const [ showErrorSpanPassword, setShowErrorSpanPassword ]   = useState(false);

  const checkFirstName = e => {
    e.target.value.length< 1 ? setShowErrorSpanFirstName(true) : setShowErrorSpanFirstName(false);
  }

  const checkLastName = e => {
    e.target.value.length< 1 ? setShowErrorSpanLastName(true) : setShowErrorSpanLastName(false);
  }

  const checkUserName = e => {
    e.target.value.length< 5 ? setShowErrorSpanUserName(true) : setShowErrorSpanUserName(false);
  }

  const checkEmail = e =>{
    const emailRegex = new RegExp('[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}')
    emailRegex.test(e.target.value) ? setShowErrorSpanEmail(false) : setShowErrorSpanEmail(true); 
  }

  const checkPassword = e => {
    e.target.value.length< 5 ? setShowErrorSpanPassword(true) : setShowErrorSpanPassword(false);
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        {/* <img src={logo} className={classes.logo}/> */}
        <Typography component="h1" variant="h5">Sign up</Typography>

        <form className={classes.form} onSubmit={(e)=>{props.signUp(e)}} >

          <Grid container spacing={2}>

            <Grid item xs={12} sm={6}>
              <TextField
                onChange={(e)=>{props.handleInputToNewUser(e)}}
                onInput={(e)=>{checkFirstName(e)}}  
                onBlur={(e)=>{checkFirstName(e)}}  
                autoComplete="fname"
                name="firstname"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                InputLabelProps={{
                  classes: {
                    root: classes.cssLabel,
                    focused: classes.cssFocused,
                  },
                }}
                InputProps={{
                  classes: {
                    root: classes.cssOutlinedInput,
                    focused: classes.cssFocused,
                    notchedOutline: classes.notchedOutline,
                  },
                }}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                onChange={(e)=>{props.handleInputToNewUser(e)}}
                onInput={(e)=>{checkLastName(e)}}  
                onBlur={(e)=>{checkLastName(e)}}  
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastname"
                autoComplete="lname"
                InputLabelProps={{
                  classes: {
                    root: classes.cssLabel,
                    focused: classes.cssFocused,
                  },
                }}
                InputProps={{
                  classes: {
                    root: classes.cssOutlinedInput,
                    focused: classes.cssFocused,
                    notchedOutline: classes.notchedOutline,
                  },
                }}
              />
            </Grid>

            <Grid item container justify='space-evenly' xs={12} sm={12}>
              {showErrorSpanFirstName && <span className={classes.errorMSG} id="errorSpanLeft" >Please enter a firstname.</span>}
              {showErrorSpanLastName && <span className={classes.errorMSG} id="errorSpanRight" >Please enter a lastname.</span>}
            </Grid>

            <Grid item xs={12}>
              <TextField
                onChange={(e)=>{props.handleInputToNewUser(e)}}
                onInput={(e)=>{checkUserName(e)}}  
                onBlur={(e)=>{checkUserName(e)}}  
                variant="outlined"
                required
                fullWidth
                id="userName"
                label="Username"
                name="username"
                autoComplete="userName"
                InputLabelProps={{
                  classes: {
                    root: classes.cssLabel,
                    focused: classes.cssFocused,
                  },
                }}
                InputProps={{
                  classes: {
                    root: classes.cssOutlinedInput,
                    focused: classes.cssFocused,
                    notchedOutline: classes.notchedOutline,
                  },
                }}
              />
            </Grid>

            <Grid item container justify='space-evenly' xs={12} sm={12}>
              {showErrorSpanUserName && <span className={classes.errorMSG}>Please enter a username longer than 5 charachters.</span>}  
            </Grid>

            <Grid item xs={12}>
              <TextField
                onChange={(e)=>{props.handleInputToNewUser(e)}}
                onInput={(e)=>{checkEmail(e)}}  
                onBlur={(e)=>{checkEmail(e)}}  
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                InputLabelProps={{
                  classes: {
                    root: classes.cssLabel,
                    focused: classes.cssFocused,
                  },
                }}
                InputProps={{
                  classes: {
                    root: classes.cssOutlinedInput,
                    focused: classes.cssFocused,
                    notchedOutline: classes.notchedOutline,
                  },
                }}
              />
            </Grid>

            <Grid item container justify='space-evenly' xs={12} sm={12}>
              {showErrorSpanEmail && <span className={classes.errorMSG}>Please enter a valid email.</span>}
            </Grid>
            
            <Grid item xs={12}>
              <TextField
                onChange={(e)=>{props.handleInputToNewUser(e)}}
                onInput={(e)=>{checkPassword(e)}}
                onBlur={(e)=>{checkPassword(e)}}
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                InputLabelProps={{
                  classes: {
                    root: classes.cssLabel,
                    focused: classes.cssFocused,
                  },
                }}
                InputProps={{
                  classes: {
                    root: classes.cssOutlinedInput,
                    focused: classes.cssFocused,
                    notchedOutline: classes.notchedOutline,
                  },
                }}
              />
            </Grid>

          </Grid>

          <Grid item container justify='space-evenly' xs={12} sm={12}>
            {showErrorSpanPassword && <span className={classes.errorMSG}>Please enter a password longer than four charachters.</span>}
          </Grid>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>

          <Grid container justify="center" >
            <Grid item>
              <p className={classes.linkText} onClick={()=>{props.toggeleSignUp()}}>Already have an account? Sign in</p>
            </Grid>
          </Grid>

        </form>

      </div>
    </Container>
  );
}

export default SignUp;
