 const movies = [];



const saveMoviesReducer = (state=movies, action) => {
  switch (action.type) {
    case 'MOVIE_RESULTS':
      console.log(action.payload)
      return {
        ...state,
        movies: action.payload
      }
    default: 
      return state;
  }
    
};

export default saveMoviesReducer;