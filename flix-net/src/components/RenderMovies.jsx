import React from 'react';
import { useSelector} from 'react-redux';
import CardComponent from './CardComponent';


export default function RenderMovies(props) {

  return (
    <div className="wrapperWatchlist">
      {props.movies &&
       props.movies.map((movie) =>{
        return <CardComponent key={movie._id} movie={movie}/>
      })}
    </div>
  )
}
