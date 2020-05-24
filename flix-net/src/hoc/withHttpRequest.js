import React, { Component } from 'react';

 
export default function withHttpRequests(WrappedComponent) {
  return class extends Component {
    constructor(props) {
      super(props)
     
    }
    

    addToWatchlist = (movie, user) =>{
      console.log(movie)
      fetch('http://localhost:4000/users/' + `${user}`,{
        method: 'PATCH',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({movie})
      })
    }

     searchMovieTitle = e => {
      return fetch('http://localhost:4000/movies/?Title=' + e.target.value)
        .then(res => res.json())
        .then(searchResult => searchResult)
    }
    
    
    mapStateToProps = (state, ownProps) => ({
      user: state.saveNewUserReducer.username,
    })





    render() {
      return (
        <WrappedComponent
          addToWatchlist={this.addToWatchlist}  
          searchMovieTitle={this.searchMovieTitle}
          {...this.props}
        />
      )
    }
  };
}