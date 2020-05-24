import React, {useState, useEffect} from 'react'
import CardComponent from './CardComponent'
import { useSelector} from 'react-redux';
import withHttpRequests from '../hoc/withHttpRequests';

function WatchList(props) {

  const user = useSelector(state => state.saveNewUserReducer)

  const [watchlist, setWatchlist] = useState();

    props.getActiveUser(user.username)
    .then(res => res.json())
    .then((activeUser) => {
      if(!watchlist) {
        setWatchlist(activeUser.watchList)
      }
    })

  
  return (
    <div className="wrapperWatchlist">
      {/* <CardComponent>
        <h1>movie 1</h1>
      </CardComponent>
      <CardComponent>
        <h1>movie 2</h1>
      </CardComponent>
      <CardComponent>
        <h1>movie 3</h1>
      </CardComponent>
      <CardComponent>
        <h1>movie 4</h1>
      </CardComponent>
      <CardComponent>
        <h1>movie 5</h1>
      </CardComponent>
      <CardComponent>
        <h1>movie 6</h1>
      </CardComponent>
      <CardComponent>
        <h1>movie 7</h1>
      </CardComponent>
      <CardComponent>
        <h1>movie 8</h1>
      </CardComponent> */}
    </div>
  )
}

export default withHttpRequests(WatchList);