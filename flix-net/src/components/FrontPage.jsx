import React, { Component, useState, useEffect } from 'react';
import { useSelector} from 'react-redux';
import { Carousel } from 'antd';
import 'antd/dist/antd.css';
import StarIcon from '@material-ui/icons/Star';
import Button from '@material-ui/core/Button';
import withHttpRequests from '../hoc/withHttpRequests';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    palette: {
      primary: {
        main: '#00695c',
      },
      secondary: {
        main: '#ad1457',
      },
    },
  } ,
  remove: {
    backgroundColor: 'rgba(181,13,24,1)',
    fontSize: '11px'

  },
  add: {
    backgroundColor: '#009688',
    fontSize: '11px',
  },
  youtube: {
    fontSize: '11px'

  }
}))

function FrontPage(props) {
  const classes = useStyles();
  const [movies, setMovies] = useState([]);
  const [watchList, setWatchList] = useState([]);

  const usersRedux = useSelector(state => state.saveNewUserReducer)
  
  useEffect(()=>{
    if(usersRedux.authenticated === true) {
      props.getActiveUser(usersRedux.username)
      
      .then(res => res.json())
      .then((activeUser) => {
        console.log(activeUser)
          setWatchList(activeUser.watchList)
      })
    }
    },[])

  props.getCarousel()
    .then(movie => setMovies(movie));

  const LinkToYouTube = (title) => {
    window.open("https://www.youtube.com/results?search_query="+ `trailer ${title}`); 
  }

  const addToWatchlist = (movie) =>{
    props.addToWatchlist(movie, usersRedux.username)
  }
  const removeFromWatchlist = (movie) =>{
    props.removeFromWatchlist(movie, usersRedux.username)
  }

    return (
      
      <React.Fragment>
        <Carousel autoplay> 
        {movies !== null ? 
          movies.map((movie)=>{
            const showRemove = watchList.find((film)=> film._id === movie._id)
            return(
              <div key={movie._id}>
                <div className="browserPosterWrapper">

                    <img className="browserPoster" alt="poster" src={movie.Poster}/>
                  
                  <div className="browserInfo">
                    <h1 className="headerTitle">{movie.Title}</h1>
                    <p className="plot">"{movie.Plot}"</p>
                    <h5 className="genre">{movie.Genre}</h5>
                    <p className="actors">{movie.Actors}</p>
                    <div className="rating">
                      <h3><StarIcon/> IMDB RATING: {movie.imdbRating}</h3>
                      <Button variant="contained" className={classes.youtube} onClick={() => LinkToYouTube(movie.Title)}>Watch Trailer</Button>
                      {usersRedux.authenticated ?
                        <React.Fragment>
                          {showRemove ? 
                            <Button variant="contained" className={classes.remove} onClick={() => removeFromWatchlist(movie)}>Remove from Watchlist</Button>
                          : 
                            <Button variant="contained" className={classes.add} onClick={() => addToWatchlist(movie)}>Add To Watchlist</Button>
                          }
                      }
                        </React.Fragment>
                      : null
                      }
                    </div>
                  </div>

                </div>
              </div>
          )})
        : null}  
        </Carousel>
      </React.Fragment>
    )
}

export default withHttpRequests(FrontPage)


