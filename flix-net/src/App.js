import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import FrontPage from './components/FrontPage';
import WatchList from './components/WatchList';
import RenderMovies from './components/RenderMovies';
import Nav from './components/Nav';
import LoginScreen from './components/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav/>
        <Route path='/' exact   component={FrontPage}></Route>
        <Route path='/Watchlist'  component={WatchList}></Route>
        <Route path='/Rendermovies'     component={RenderMovies}></Route>
        <Route path='/Login'     component={LoginScreen}></Route>
      </BrowserRouter>      
    </div>
  );
}

export default App;
