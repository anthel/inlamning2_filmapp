const initialState = {
  username: '',
  authenticated: false,
  
};

const saveNewUserReducer = (state=initialState, action) => {
  switch (action.type) {
    case 'LOGG_IN': 
      return {
        ...state, 
        authenticated: true, 
        username: action.payload.username,
      };
    case 'LOGG_OUT': 
      return {
      ...state, 
      authenticated: false, 
      username: null
    };
    
    default: 
      return state;
  }
    
};

export default saveNewUserReducer;