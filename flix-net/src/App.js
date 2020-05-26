import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import FrontPage from './components/FrontPage';
import WatchList from './components/WatchList';
import Nav from './components/Nav';
import SearchMovies from './components/SearchMovies';


import LoginScreen from './components/LoginScreen'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav/>
        <Route path='/' exact   component={FrontPage}></Route>
        <Route path='/Watchlist'  component={WatchList}></Route>
        <Route path='/SearchMovies'     component={SearchMovies}></Route>
        <Route path='/Login'     component={LoginScreen}></Route>
      </BrowserRouter>      
    </div>
  );
}

export default App;
