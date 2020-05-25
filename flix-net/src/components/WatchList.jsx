import React, {useState, useEffect} from 'react'
import { useSelector} from 'react-redux';
import withHttpRequests from '../hoc/withHttpRequests';
import RenderMovies from './RenderMovies'

function WatchList(props) {

  const user = useSelector(state => state.saveNewUserReducer)
  const [watchlist, setWatchlist] = useState([]);


useEffect(()=>{
  if(user.authenticated === true) {
      props.getActiveUser(user.username)
    
    .then(res => res.json())
    .then((activeUser) => {
        setWatchlist(activeUser.watchList)
    })
  }
  },[])
    

  if(user.authenticated && watchlist.length > 0 ) {
    return (
      <div className="wrapperWatchlist">
        <RenderMovies movies={watchlist}/>
      </div>
    )
  }

  else {
    return (
      <div className="wrapperWatchlist">
        {user.authenticated ? 
        <h1 style={{color: 'white'}}>You dont have any saved movies.</h1>
        :
        <h1 style={{color: 'white'}}>Login to see your watchlist.</h1> 
        }
    </div>
    )
  }
}

export default withHttpRequests(WatchList);