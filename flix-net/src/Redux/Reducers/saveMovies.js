 const movies = [];



const saveMoviesReducer = (state=movies, action) => {
  switch (action.type) {
    case 'MOVIE_RESULTS':
      return {
        ...state,
        movies: action.payload
      }
    default: 
      return state;
  }
    
};

export default saveMoviesReducer;