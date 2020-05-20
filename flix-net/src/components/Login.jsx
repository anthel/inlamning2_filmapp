import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  input: {
    // color: 'white',
  },
  linkText: {
    color: 'lightgrey',
    fontSize: '1.2em',
    cursor: 'pointer'
  },
  cssLabel: {
    // color: 'white'
  },
  cssFocused: {
  },
  cssOutlinedInput: {
    '&$cssFocused $notchedOutline': {
      borderWidth: '1px',
    }
  },
  notchedOutline: {
    borderWidth: '1px',
    // borderColor: 'white !important'
  } ,
  errorMSG: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: '1.1em',
    padding: '8px'
  },
  logo: {
    width: '250px',
    height: '250px',
    marginBottom: '10px'
  }
}));

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit">Ante, EnFinAnka, Emma, Oscar</Link>
      {' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

/**
 * @description holds the loginform and has logic for validation and feedback if something is incorrect.
 * @param props - handleSignInUser() sends inputvalues to state in LoginScreencomponent.
 * @param props - login() calls the loginfunction.
 * @param props - toggeleSignUp() for displaying this component or the Logincomponent. 
 * @returns JSX - the signupform.
 */
function LoginScreen(props) {

  const classes = useStyles();

  const [ showErrorSpanUserName, setShowErrorSpanUserName ] = useState(false)
  const [ showErrorSpanPassword, setShowErrorSpanPassword ] = useState(false)

  const checkUserName = e => {
    e.target.value.length< 1 ? setShowErrorSpanUserName(true) : setShowErrorSpanUserName(false)
  }

  const checkPassword = e => {
    e.target.value.length< 5 ? setShowErrorSpanPassword(true) : setShowErrorSpanPassword(false)
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        {/* <img src={logo} className={classes.logo}/> */}
        <Typography component="h1" variant="h5">Sign in</Typography>

        <form className={classes.form} onSubmit={e=>{props.login(e)}} >

          <TextField
            onChange={e=>{props.handleSignInUser(e)}}
            onInput={(e)=>{checkUserName(e)}}
            onBlur={(e)=>{checkUserName(e)}}
            variant="outlined"
            margin="normal"
            InputLabelProps={{
              classes: {
                root: classes.cssLabel,
                focused: classes.cssFocused                
              },
            }}
            InputProps={{
              classes: {
                root: classes.cssOutlinedInput,
                focused: classes.cssFocused,
                notchedOutline: classes.notchedOutline,
              },
            }}
            required
            fullWidth
            id="userName"
            label="Username"
            name="userName"
            autoComplete="userName"
            autoFocus
          />

            <Grid item container justify='space-evenly' xs={12} sm={12}>
              {showErrorSpanUserName && <span className={classes.errorMSG}>Please enter a username.</span>}
            </Grid>

          <TextField
            onChange={e=>{props.handleSignInUser(e)}}
            onInput={(e)=>{checkPassword(e)}}
            onBlur={(e)=>{checkPassword(e)}}
            variant="outlined"
            margin="normal"
            required
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
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Grid item container justify='space-evenly' xs={12} sm={12}>
            {showErrorSpanPassword && <span className={classes.errorMSG}>Password need to be longer than four charachters.</span>}
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container justify="center">
            <Grid>
              <p className={classes.linkText} onClick={()=>{props.toggeleSignUp()}}> Not a member yet? Sign up here!</p>
            </Grid>
          </Grid>

        </form>

      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}

export default LoginScreen;
