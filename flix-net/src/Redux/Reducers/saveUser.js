const initialState = {
  username: '',
  authenticated: false,
  
};

const saveNewUserReducer = (state=initialState, action) => {
  switch (action.type) {
    case 'LOGG_IN': 
    console.log('action.type', action.type, action.payload.username );
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
    default: return state;
  }
    
};

export default saveNewUserReducer;