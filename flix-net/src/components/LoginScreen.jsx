import React, { useState } from 'react'
import Login from './Login';
import SignUp from './SignUp'
import { withRouter } from 'react-router-dom';
import { loggIn, saveNewUser } from '../../Redux/Actions';
import { useDispatch, useSelector } from 'react-redux';


/**
 * @description holds the logic for a handeling login and sign up. Passed down to it's children.
 * @param props - history, from withRouter, needed to "push" to chat.
 * @returns Login or SignUp-component.
 */
const LoginScreen = (props) => {

  const [showSignUp, setShowSignUp] = useState(false);
  const [newUser, setNewUser] = useState({});
  const [signInUser, setSignInUser] = useState({
    userName:'',
    password:''
  });

  const dispatch = useDispatch();
  const usersRedux = useSelector(state => state.saveNewUserReducer)
  
  const handleInputToNewUser = e =>{
    setNewUser({...newUser, [e.target.name]: e.target.value});
  }

  const handleSignInUser = e =>{
    setSignInUser({...signInUser, [e.target.name]: e.target.value});
  }

  /**
   * @description authenticates the potential user with the credible users from the reducer(usersRedux).
   * If authenticated, sets the username to sessionstorage, dipatches the logIn-action and navigates to chat
   * via history. If not authenticated, provides feedback of the error.
   * @param e - the submitevent from the loginform. 
   * @returns JSX - the signupform.
   */
  const login = e => {
    e.preventDefault();
    const sucessfullLoginUser = usersRedux.find((user)=>{             //INSERT BACKEND!
      return user.username === signInUser.userName && user.password === signInUser.password
    })
    if(sucessfullLoginUser){                                           //INSERT BACKEND!
      sessionStorage.setItem('loggedInUser', sucessfullLoginUser.userName)
      dispatch(loggIn(sucessfullLoginUser))
      props.history.push('/Chat');
    } else {
      const userExists = usersRedux.find((user)=>{                         //INSERT BACKEND!
        return user.username === signInUser.userName;
      })
      if(userExists){
        alert('wrong password');
        return;
      }
      alert('wrong credentials');
    }
  }
  
  // Adds a new user to saveNewUserReducer, sets a new empty object and toggles the form.
  const signUp = e => {
    e.preventDefault();
    dispatch(saveNewUser(newUser));                                      //INSERT BACKEND!
    setNewUser({});
    toggeleSignUp();
  }

  const toggeleSignUp = () => {
    setShowSignUp(!showSignUp)
  }

    return (
      <div id="logginWrapper">
        {!showSignUp ? 
        <Login login={e=>{login(e)}} handleSignInUser={e=>{handleSignInUser(e)}} toggeleSignUp={toggeleSignUp} /> 
        : 
        <SignUp signUp={e=>{signUp(e)}} handleInputToNewUser={e=>{handleInputToNewUser(e)}} toggeleSignUp={toggeleSignUp} />}
      </div>
      )

}

export default withRouter(LoginScreen)
