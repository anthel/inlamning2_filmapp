import React, { Component, useState, useEffect } from 'react';
import { Carousel } from 'antd';
import 'antd/dist/antd.css';

export default class FrontPage extends Component {

  // const [movies, getMovies ] = useState([])
  constructor() {
    super();
    this.state = {
      movies: []
    }
  }

  componentDidMount = () =>{
    console.log('runs')
    fetch('/movies')
    .then(res => res.json())
    .then(movie => this.setState({movies: movie}));
  }
   
  
  render() {
    return (
      <React.Fragment>
        {this.state.movies !== null ? 
        this.state.movies.map((movie)=>{
          return(
            <Carousel autoplay>
            <div>
              <h3>{movie}</h3>
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
          )
         
        })
     
        : null
        }
      </React.Fragment>
    )
  }
  
}


