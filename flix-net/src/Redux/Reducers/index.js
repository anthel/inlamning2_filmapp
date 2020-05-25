import saveNewUserReducer from './saveUser'
import saveMoviesReducer from './saveMovies'

import { combineReducers }from 'redux'

const allReducers = combineReducers({
  saveNewUserReducer,
  saveMoviesReducer,
})

export default allReducers;