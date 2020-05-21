import React, { Component } from 'react';
import { Carousel } from 'antd';
import 'antd/dist/antd.css';
import layer from '../svg/layer.png';
import StarIcon from '@material-ui/icons/Star';
import Button from '@material-ui/core/Button';


export default class FrontPage extends Component {

  constructor() {
    super();
    this.state = {
      movies: []
    }
  }

  componentDidMount = () => {
    console.log('runs')
    fetch('http://localhost:4000/movies/carousel')
    .then(res => res.json())
    .then(movie => this.setState({movies: movie}));
  }

  LinkToYouTube = (title) => {
    window.open("https://www.youtube.com/results?search_query="+ `trailer ${title}`); 
  }

  
  render() {
    return (
      <React.Fragment>
        <Carousel autoplay> 
        {this.state.movies !== null ? 
          this.state.movies.map((movie)=>{
            return(
              <div key={movie._id}>
                <div className="browserPosterWrapper">

                  <div className="shadowOnPoster"> 
                    <img src={layer} alt="layer" className="layer"/>
                    <img className="browserPoster" alt="poster" src={movie.Poster}/>
                  </div>
                  
                  <div className="browserInfo">
                    <h1 className="headerTitle">{movie.Title}</h1>
                    <p className="plot">"{movie.Plot}"</p>
                    <h5 className="genre">{movie.Genre}</h5>
                    <p className="actors">{movie.Actors}</p>
                    <div className="rating">
                      <h3><StarIcon/> IMDB RATING: {movie.imdbRating}</h3>
                      <Button variant="contained" onClick={() => this.LinkToYouTube(movie.Title)}>Watch Trailer</Button>
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

}


