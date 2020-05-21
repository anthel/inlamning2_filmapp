import React, { Component } from 'react'

export default class CardComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showInfo: false
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

  render() {
    return (
      <div className="movie-card" onMouseEnter={this.showMoreInfo} onMouseLeave={this.hideInfo}>

        <div className="movie-card-image" style={this.state.showInfo ? this.onHoverCard : null}>
          <img alt="poster" src="https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg"/>
        </div>

        {this.state.showInfo === true &&
        <div className="movie-information">
          <h1>{this.props.title}</h1>
          <h3>Plot:<br /> {this.props.plot}</h3>
          <div className="genre-cast-bar">
            <h4>Genre: {this.props.genre}</h4>
            <h4>Cast: {this.props.cast}</h4>
          </div>
        </div>
        }
      </div>
    )
  }
}
