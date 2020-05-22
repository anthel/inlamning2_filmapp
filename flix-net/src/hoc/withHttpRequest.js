import React, { Component } from 'react';

 
export default function withHttpRequests(WrappedComponent) {
  return class extends Component {
    constructor(props) {
      super(props)
     
    }
    

    addToWatchlist = (movieId, user) =>{
      console.log(movieId)
      fetch('http://localhost:4000/users/' + `${user}`,{
        method: 'PATCH',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({movieId})
      })
    }
    
    mapStateToProps = (state, ownProps) => ({
      user: state.saveNewUserReducer.username,
    })




    render() {
      return (
        <WrappedComponent
        addToWatchlist={this.addToWatchlist}  
        {...this.props}
        />
      )
    }
  };
}