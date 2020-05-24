import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
// import flixnet from '../svg/flixnet.svg';
import logo from '../svg/logo2.svg';
import StarIcon from '@material-ui/icons/Star';
import ViewAgendaIcon from '@material-ui/icons/ViewAgenda';
import PersonIcon from '@material-ui/icons/Person';

import InputBase from '@material-ui/core/InputBase';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';


import { useDispatch } from 'react-redux'
import { movieResults } from '../Redux/Actions'



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

function Nav(props) {

  const history = useHistory();
  const dispatch = useDispatch();

  const searchMovieTitle = e => {
      fetch('http://localhost:4000/movies/?Title=' + e.target.value)
      .then(res => res.json())
      .then(searchResult => dispatch(movieResults(searchResult)))

      

  }
  

  const frontPage = () => {
    history.push('/')
  }

  const classes = useStyles();

  return (
    <div className="navBar">
      <img src={logo} className="logo" alt="logo" onClick={() => frontPage()}/>
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
          onChange={e=>searchMovieTitle(e)}
        />
      </div>
      <div className="navLinks">
        <NavLink className="navLink" to='/Watchlist'><StarIcon className="navIcon"/>Watchlist</NavLink>
        <NavLink className="navLink" to='/Rendermovies'><ViewAgendaIcon className="navIcon"/>Genre</NavLink>
        <NavLink className="navLink" to='/Login'><PersonIcon className="navIcon"/>Login</NavLink>
      </div>
    </div> 
  )
}


export default Nav;