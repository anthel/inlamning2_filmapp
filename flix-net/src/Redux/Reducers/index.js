import saveNewUserReducer from './saveUser'

import { combineReducers }from 'redux'

const allReducers = combineReducers({
  saveNewUserReducer,
})

export default allReducers;