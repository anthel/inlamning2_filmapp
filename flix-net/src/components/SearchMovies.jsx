import React, { useState } from 'react';
import { useSelector} from 'react-redux';
import RenderMovies from './RenderMovies';

export default function SearchMovies(props) {

  const moviesRedux = useSelector(state => state.saveMoviesReducer)
  const [update, setUpdate] = useState(false);

  const changeUpdateState = () => {
    setUpdate(!update)
  }

  return (
    <div>
      <RenderMovies movies={moviesRedux.movies} changeUpdateState={changeUpdateState} update={update}/>
    </div>
  )
}
