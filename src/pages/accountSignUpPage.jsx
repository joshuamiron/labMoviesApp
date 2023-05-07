import React, { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from '../contexts/authContext';
import { Link } from "react-router-dom";

const SignUpPage = props => {
  const context = useContext(AuthContext)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");
  const [registered, setRegistered] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");



  const register = () => {
    if (password.length > 0 && password === passwordAgain) {
      console.log("reg")
      context.register(email, password, firstName, lastName);
      setRegistered(true);
    }
  }

  // const { from } = props.location.state || { from: { pathname: "/" } };

  if (registered === true) {
    return <Navigate to="./home" />;
  }

  return (
    <>
      <h2>Sign up</h2>
      <p>You must create an account to log in </p>
      <input value={firstName} id="first name" placeholder="first name" onChange={e => {
        setFirstName(e.target.value);
      }}></input><br /><br />
      <input value={lastName} id="last name" placeholder="last name" onChange={e => {
        setLastName(e.target.value);
      }}></input><br /><br />
      <input id="email" value={email} placeholder="email" onChange={e => {
        setEmail(e.target.value);
      }}></input><br /><br />
      <input value={password} id="password" type="password" placeholder="password" onChange={e => {
        setPassword(e.target.value);
      }}></input><br /><br />
      <input value={passwordAgain} id="confirm password" type="password" placeholder="confirm password" onChange={e => {
        setPasswordAgain(e.target.value);
      }}></input><br /><br />
      {/* Login web form  */}
      <button onClick={register}>Create account</button>
      <p>Already have an account?{" "}
        <Link to="/login">Log in!</Link></p>
    </>
  );
};

export default SignUpPage;
