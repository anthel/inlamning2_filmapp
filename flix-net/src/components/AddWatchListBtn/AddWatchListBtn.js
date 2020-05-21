import React, { Component, Fragment } from 'react'

import './AddWatchListBtn.css'

export default class AddWatchListBtn extends Component {
  constructor(props) {
    super(props)

    this.state = {
      watchList: []
    }
  }
  addToWatchlist = () => {
    let mathRandom = [Math.floor(Math.random() * 5)]
    let tempArray = this.state.watchList.concat(mathRandom)

    this.setState({ watchList: tempArray })

    console.log(tempArray);
  }

  render() {
    return (
      <Fragment>
        <button className="add-watchlist-btn" onClick={this.addToWatchlist}>Add to Watchlist</button>
      </Fragment>
    )
  }
}
