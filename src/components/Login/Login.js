import React from "react";
import useFirebase from "../Hooks/Hooks";

const Login = () => {
  const { signInWithGoogle, } = useFirebase();
  return (
    <div>
      <h1>Please Login</h1>
      <div className="google-sign">
        <button onClick={signInWithGoogle}>Google Sign in</button>
      </div>
      <form action="">
        <br />
        <input type="email" placeholder="Enter Your Email" /> <br />
        <input
          type="password"
          placeholder="Enter Your 
                  Password"
        />{" "}
        <br />
        <input type="submit" value="login" />
      </form>
    </div>
  );
};

export default Login;
