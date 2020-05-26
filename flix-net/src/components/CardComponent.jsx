import React, { Component } from 'react'
/* 
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown'; */

import withHttpRequests from '../hoc/withHttpRequests'
import Button from '@material-ui/core/Button';

class CardComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showInfo: false,
      addbtn: {
        backgroundColor: '#009688',
        fontSize: '11px',
      },
    }

    this.onHoverCard = {
      opacity: '20%',
      transition: '0.2s'
    }
  }

  showMoreInfo = () => {
    this.setState({ showInfo: true })
  }

  hideInfo = () => {
    this.setState({ showInfo: false })
  }

  addToWatchlist = (movie) =>{
    this.props.addToWatchlist(movie, this.props.usersRedux.username)
    .then( () => {
      this.props.changeUpdateState()
    })
  }

  removeFromWatchlist = (movie) => {
    this.props.removeFromWatchlist(movie, this.props.usersRedux.username)
    .then( () => {
      this.props.changeUpdateState()
    })
  }
  
  render() {
    return (
      <div className="movie-card" onMouseEnter={this.showMoreInfo} onMouseLeave={this.hideInfo}>

        <div className="movie-card-image" style={this.state.showInfo ? this.onHoverCard : null}>
          <img alt="poster" src={this.props.movie.Poster}/>
        </div>

        {this.state.showInfo === true &&
        <div className="movie-information" key={this.props.movie._id}>
          <h1>{this.props.movie.Title}</h1>
          <h3>Plot:<br /> {this.props.movie.Plot}</h3>
          <div className="genre-cast-bar">
            <h4>Genre: {this.props.movie.Genre}</h4>
            <h4>Cast: {this.props.movie.Actors}</h4>

            {/* <div id="thumbContainer">
              <ThumbUpIcon style={{fontSize:"6em", color: "white"}}/>
              <ThumbDownIcon style={{fontSize:"6em", color: "white"}}/>
            </div> */}

            {this.props.showRemove ?
            <Button variant="contained" onClick={() => this.removeFromWatchlist(this.props.movie)}>Remove from Watchlist</Button>
            : 
            <Button variant="contained" onClick={() => this.addToWatchlist(this.props.movie)}>Add To Watchlist</Button>}
            
          </div>
        </div>
        }
      </div>
    )
  }
}

export default withHttpRequests(CardComponent)