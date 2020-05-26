import React, { Component } from 'react';

 
export default function withHttpRequests(WrappedComponent) {
  return class extends Component {
  
    addToWatchlist = (movie, user) =>{
      return fetch('http://localhost:4000/users/' + user,{
        method: 'PATCH',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({movie})
      })
    }

    removeFromWatchlist = (movie, user) =>{
      console.log(movie)
      return fetch('http://localhost:4000/users/delete/' + user,{
        method: 'PATCH',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({movie})
      })
    }

    getActiveUser = (username) => {
      return fetch('http://localhost:4000/users/'+username)
    }

    searchMovieTitle = e => {
      return fetch('http://localhost:4000/movies/?Title=' + e.target.value)
        .then(res => res.json())
        .then(searchResult => searchResult)
    }
    getCarousel = () => {
      return fetch('http://localhost:4000/movies/carousel')
      .then(res => res.json())
    }
    
    
    mapStateToProps = (state, ownProps) => ({
      user: state.saveNewUserReducer.username,
    })

    render() {
      return (
        <WrappedComponent
          addToWatchlist={this.addToWatchlist}  
          searchMovieTitle={this.searchMovieTitle}
          getActiveUser={this.getActiveUser}
          getCarousel={this.getCarousel}
          removeFromWatchlist={this.removeFromWatchlist}
          {...this.props}
        />
      )
    }
  };
}