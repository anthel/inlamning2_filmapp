import React, { Component, useState, useEffect } from 'react';
import { useSelector} from 'react-redux';
import { Carousel } from 'antd';
import 'antd/dist/antd.css';
import layer from '../svg/layer.png';
import StarIcon from '@material-ui/icons/Star';
import Button from '@material-ui/core/Button';
import withHttpRequests from '../hoc/withHttpRequest';
// import AddWatchListBtn from './AddWatchListBtn/AddWatchListBtn'


function FrontPage(props) {
  
    const [movies, setMovies] = useState([]);
    const [watchList, setWatchList] = useState([]);

    const usersRedux = useSelector(state => state.saveNewUserReducer)


 

  useEffect(() => {
    console.log('runs')
    fetch('http://localhost:4000/movies/carousel')
    .then(res => res.json())
    .then(movie => setMovies(movie));
  },[])

  const LinkToYouTube = (title) => {
    window.open("https://www.youtube.com/results?search_query="+ `trailer ${title}`); 
  }

  const addToWatchlist = (movieId) =>{
    props.addToWatchlist(movieId, usersRedux.username)
  }
    
    return (
      <React.Fragment>
        <Carousel autoplay> 
        {movies !== null ? 
          movies.map((movie)=>{
            return(
              <div key={movie._id}>
                <div className="browserPosterWrapper">

                  {/* <div className="shadowOnPoster">  */}
                    {/* <img src={layer} alt="layer" className="layer"/> */}
                    <img className="browserPoster" alt="poster" src={movie.Poster}/>
                  {/* </div> */}
                  
                  <div className="browserInfo">
                    <h1 className="headerTitle">{movie.Title}</h1>
                    <p className="plot">"{movie.Plot}"</p>
                    <h5 className="genre">{movie.Genre}</h5>
                    <p className="actors">{movie.Actors}</p>
                    <div className="rating">
                      <h3><StarIcon/> IMDB RATING: {movie.imdbRating}</h3>
                      <Button variant="contained" onClick={() => LinkToYouTube(movie.Title)}>Watch Trailer</Button>
                      <Button variant="contained" color="primary" onClick={() => addToWatchlist(movie._id)}>Add To Watchlist</Button>
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


