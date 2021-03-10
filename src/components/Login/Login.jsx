import { Button } from "@material-ui/core";
import React from "react";
import { auth, signInWithGoogle } from "../../firebase";
import "./Login.scss";
function Login() {
  return (
    <div className="login">
      <div className="login-container">
        <img
          src="https://www.vectorlogo.zone/logos/gmail/gmail-ar21.svg"
          alt="gmail"
        />
        <Button variant="contained" color="primary" onClick={signInWithGoogle}>
          Log In
        </Button>
      </div>
    </div>
  );
}

export default Login;
