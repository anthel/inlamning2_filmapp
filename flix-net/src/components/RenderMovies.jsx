import React from 'react';
import CardComponent from './CardComponent';

import { useSelector} from 'react-redux';

export default function RenderMovies(props) {
  const [watchList, setWatchList] = useState([]);
  const usersRedux = useSelector(state => state.saveNewUserReducer)
  const showRemove = watchList.find((film)=> film._id === movie._id)

  useEffect(()=>{
    if(usersRedux.authenticated === true) {
      props.getActiveUser(usersRedux.username)
      .then(res => res.json())
      .then((activeUser) => {
        console.log(activeUser)
          setWatchList(activeUser.watchList)
      })
    }
    },[])

  return (
    <div className="wrapperWatchlist">
      {props.movies &&
       props.movies.map((movie) =>{
        return <CardComponent key={movie._id} movie={movie} usersRedux={usersRedux} showRemove={showRemove}/>
      })}
    </div>
  )
}
