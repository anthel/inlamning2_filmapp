import React from 'react';
import { useSelector} from 'react-redux';
import RenderMovies from './RenderMovies';

export default function SearchMovies(props) {

  const moviesRedux = useSelector(state => state.saveMoviesReducer)

  return (
    <div>
      <RenderMovies movies={moviesRedux.movies}/>
    </div>
  )
}
