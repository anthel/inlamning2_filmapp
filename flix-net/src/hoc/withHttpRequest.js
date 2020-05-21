import React, { Component } from 'react';
 
export default function withHttpRequests(WrappedComponent) {
  return class extends Component {
    constructor(props) {
      super(props)
    }
    
    addToWatchlist = () => {
      console.log("hello")
    }
 
    render() {
      return (
        <WrappedComponent
        addToWatchlist={this.addToWatchlist}
        />
      )
    }
  };
}