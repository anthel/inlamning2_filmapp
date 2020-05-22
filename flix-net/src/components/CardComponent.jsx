import React, { Component } from 'react'

export default class CardComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showInfo: false
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
        <div className="movie-card-image">
          <img alt="poster" src={this.props.movie.Poster}/>
        </div>
        {this.props.children}
      </div>
    )
  }
}
