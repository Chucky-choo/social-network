import React, {useState} from 'react';
import SignIn from "./Sign-in/SignIn";
import {useSelector} from "react-redux";
import {Redirect} from "react-router";
import SignupForm from "./SignUpForm/SignUpForm";



const Login = () => {
  const [haveAcanthus, setHaveAcanthus] = useState(true)

  const isAuth = useSelector(store => store.auth.isAuth)
  if(isAuth) {return <Redirect to='/Content' />}


  return (
    <div>
      <button onClick={() => setHaveAcanthus(true)}>Sign In</button>
      <button onClick={() => setHaveAcanthus(false)}>Sign Up</button>
      {haveAcanthus && <SignIn/>}
      {!haveAcanthus && <SignupForm/>}
    </div>
  );
}


export default Login;