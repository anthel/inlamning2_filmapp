import React from 'react';
import { useSelector} from 'react-redux';
import CardComponent from './CardComponent';

export default function RenderMovies() {

  const moviesRedux = useSelector(state => state.saveMoviesReducer)
  console.log(moviesRedux.movies)
  return (
    <div>
      {moviesRedux.movies &&
       moviesRedux.movies.map((movie) =>{
        return <CardComponent key={movie._id} movie={movie}/>
      })}
    </div>
  )
}
