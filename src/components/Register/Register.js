import React from "react";

const Register = () => {
  return (
    <div>
      <h1>Register this form</h1>
      <form action="">
        <input
          type="text"
          placeholder="Type Your name"
        />{" "}
        <br />
        <input type="email" placeholder="Enter Your Email" /> <br />
        <input
          type="password"
          placeholder="Enter Your 
                  Password"
        />
        <br />
        <input type="submit" value="Register" />
      </form>
    </div>
  );
};

export default Register;
