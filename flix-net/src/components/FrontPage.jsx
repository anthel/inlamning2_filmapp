import React, { Component, useState, useEffect } from 'react';
import { Carousel } from 'antd';
import 'antd/dist/antd.css';
import layer from '../svg/layer.png';
import StarIcon from '@material-ui/icons/Star';
import Button from '@material-ui/core/Button';
import withHttpRequests from '../hoc/withHttpRequest';
// import AddWatchListBtn from './AddWatchListBtn/AddWatchListBtn'


class FrontPage extends Component {

  // const [movies, getMovies ] = useState([])
  constructor(props) {
    super(props)
    this.state = {
      movies: [],
      watchList: []
    }
  }

  // componentDidMount = () =>{
  //   console.log('runs')
  //   fetch('http://localhost:4000/movies')
  //   .then(res => res.json())
  //   .then(movie => console.log(movie));
  // }
  
  render() {
    return (
      <React.Fragment>
        {/* {this.state.movies !== null ? 
        this.state.movies.map((movie)=>{
          return( */}
          {/* autoplay */}
            <Carousel> 
            <div>
              <div className="browserPosterWrapper">

                <div className="shadowOnPoster"> 
                  {/* <img src={layer} alt="layer" className="layer"/> */}
                  <img className="browserPoster" alt="poster" src="https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg"/>
                </div>
                
                <div className="browserInfo">
                  <h1 className="headerTitle">Joker</h1>
                  <p className="plot">"In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: the Joker."</p>
                  <h5 className="genre">Crime Drama Thriller</h5>
                  <p className="actors">Joaquin Phoenix, Robert De Niro, Zazie Beetz, Frances Conroy</p>
                  {/* <h4 className="release">Release Date 04 Oct 2019</h4> */}
                  <div className="rating">
                    <h3><StarIcon/> IMDB RATING: 8.5</h3>
                    <div className="testDiv">
                    <Button variant="contained">Watch Trailer</Button>
                    <Button variant="contained" color="primary" onClick={this.props.addToWatchlist}>Add To Watchlist</Button>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            <div>
              <h3>Suggestion 2</h3>
            </div>
            <div>
              <h3>Suggestion 3</h3>
            </div>
            <div>
              <h3>Suggestion 4</h3>
            </div>
          </Carousel>
          {/* )
         
          })
     
        : null
        }  */}
      </React.Fragment>
    )
  }
  
}

export default withHttpRequests(FrontPage)


