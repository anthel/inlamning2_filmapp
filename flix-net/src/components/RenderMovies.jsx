import React from 'react';
import CardComponent from './CardComponent';

import { useSelector} from 'react-redux';

export default function RenderMovies(props) {
  const usersRedux = useSelector(state => state.saveNewUserReducer)

  return (
    <div className="wrapperWatchlist">
      {props.movies &&
       props.movies.map((movie) =>{
        return <CardComponent key={movie._id} movie={movie} usersRedux={usersRedux}/>
      })}
    </div>
  )
}
