import React from "react";
import "./Login.css";
import { Button } from "@material-ui/core";
import { signInWithGoogle } from "../firebase";
import { useStateValue } from "../StateProvider";
import { actionTypes } from "../reducer";

function Login(props) {
  const [state, dispatch] = useStateValue();

  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://logoness.com/wp-content/uploads/2016/05/tight-logo.jpg"
          alt=""
        />
        <h1>Sign in to Tight</h1>
        <p>Tight.slack.com</p>
        <Button onClick={signInWithGoogle} type="button">Sign in with google</Button>
      </div>
    </div>
  );
}

export default Login;
