import React from "react";
import "./Login.css";
import { Button } from "@material-ui/core";
import { auth, provider } from "../firebase";
import { useStateValue } from "../StateProvider";
import { actionTypes } from "../reducer";

function Login(props) {
  const [state, dispatch] = useStateValue();

  const signInWithGoogle = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://logoness.com/wp-content/uploads/2016/05/tight-logo.jpg"
          alt=""
        />
        <h1>Sign in to Tight</h1>
        <p>Tight.slack.com</p>
        <Button onClick={signInWithGoogle} type="button">
          Sign in with google
        </Button>
      </div>
    </div>
  );
}

export default Login;
