import React from 'react';
import { NavLink } from 'react-router-dom';
import flixnet from '../svg/flixnet.svg'
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import StarIcon from '@material-ui/icons/Star';
import ViewAgendaIcon from '@material-ui/icons/ViewAgenda';
import PersonIcon from '@material-ui/icons/Person';


import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { createStyles, fade, Theme, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';


import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

const theme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: green,
  },
  status: {
    danger: 'orange',
  },
});


const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },

    searchIconInSearch: {
      color: 'white',
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor:'rgb(51, 53, 59)',
      '&:hover': {
        backgroundColor: 'rgb(74, 75, 78)',
      },
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'white',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }),
);

export default function Nav() {

  const inputChange = (e) => {
    console.log(e.target.value)
  }

  const classes = useStyles();

  return (
    <div className="navBar">
      <img src={flixnet} className="logo"/>
      <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon className={classes.searchIconInSearch}/>
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
              onKeyUp={(e) => inputChange(e)}
            />
          </div>
      <div className="navLinks">
        <NavLink className="navLink" to='/Watchlist'><StarIcon/>Watchlist</NavLink>
        <NavLink className="navLink" to='/Rendermovies'><ViewAgendaIcon/>Genre</NavLink>
        <NavLink className="navLink" to='/Login'><PersonIcon/>Login</NavLink>
      </div>
    </div> 
  )
}

{/* <div className="navBar">

 <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction label="Watchlist" className="navLink" icon={<StarIcon />} />
      <BottomNavigationAction label="Genre" icon={<FavoriteIcon />} />
      <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
    </BottomNavigation>
    </div> */}