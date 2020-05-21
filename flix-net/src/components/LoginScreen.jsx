import React, { useState } from 'react'
import Login from './Login';
import SignUp from './SignUp'

const LoginScreen = (props) => {

  const [showSignUp, setShowSignUp] = useState(false);
  const [newUser, setNewUser] = useState({});
  const [signInUser, setSignInUser] = useState({
    username:'',
    password:''
  });

  const handleInputToNewUser = e =>{
    setNewUser({...newUser, [e.target.name]: e.target.value});
  }

  const handleSignInUser = e =>{
    setSignInUser({...signInUser, [e.target.name]: e.target.value});
  }

  const login = e => {
    e.preventDefault();
    fetch(`http://localhost:4000/users/${signInUser.userName}`,
    {
      method: 'put',   
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(signInUser)
    })
    .then(res => res.status === 202 ?  props.history.push('/Watchlist') : alert('fel!'))
    }
    
  const signUp = e => {
    e.preventDefault();
    fetch('http://localhost:4000/users', 
    {
      method: 'post',   
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(newUser)
    })
    .then(info => info.json())
    .then(data => {
      setNewUser({});
      toggeleSignUp();
    })
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

export default LoginScreen;
