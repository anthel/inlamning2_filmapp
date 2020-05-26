import React, { useEffect, useState } from 'react';
import CardComponent from './CardComponent';


export default function RenderMovies(props) {

import { useSelector } from 'react-redux';
import withHttpRequests from '../hoc/withHttpRequests';

function RenderMovies(props) {
  const [watchList, setWatchList] = useState([]);
  const usersRedux = useSelector(state => state.saveNewUserReducer)

  useEffect(()=>{
    console.log(props.update)
    if(usersRedux.authenticated === true) {
      props.getActiveUser(usersRedux.username)
      .then(res => res.json())
      .then((activeUser) => {
        console.log(activeUser)
          setWatchList(activeUser.watchList)
      })
    }
  }, [props.update])


  return (
    <>
    {props.movies !== undefined && props.movies.length !== 0 &&
      <div className="wrapperWatchlist">
        {props.movies && props.movies.map(movie => {
        const showRemove = watchList.find((film)=> film._id === movie._id)
        return <CardComponent
        key={movie._id}
        movie={movie}
        usersRedux={usersRedux}
        showRemove={showRemove}
        changeUpdateState={props.changeUpdateState}
        />})}
      </div>
    }
    </>
  )

}

export default withHttpRequests(RenderMovies)