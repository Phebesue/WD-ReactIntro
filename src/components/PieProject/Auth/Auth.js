import React, { useState } from "react";
import "./Auth.css";
import { ListGroupItemHeading, CardTitle } from "reactstrap";

const Auth = (props) => {
  console.log(props);
  // props.setSessionToken("value")
  const [login, setLogin] = useState(true);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("email here");
  const [password, setPassword] = useState("");
  const title = () => {
    return login ? "Login" : "Signup";
  };

  const loginToggle = (event) => {
    event.preventDefault();

    setLogin(!login);
    setEmail("");
    setPassword("");
    setFirstName("");
    setLastName("");
  };

  const signupFields = () =>
    !login ? (
      <div id="signup">
        <div className="fname">
            
            <label htmlFor="firstName">First Name:</label>
            <br />
            <input
              type="text"
              id="fname"
              placeholder="First Name"
              onChange={(e) => setFirstName(e.target.value)}
            />
        </div>
        {/* <br /> */}
        <div className="lname">
            <label htmlFor="lastName">Last Name:</label>
            <br />
            <input
              type="text"
              id="lname"
              placeholder="Last Name"
              onChange={(e) => setLastName(e.target.value)}
            />
            <br />
        </div>
      </div>
    ) : null;

    const authFunction=(event) =>{
        event.preventDefault();
        // set up information in an object
        let userObject={
            fName: firstName,
            lName: lastName,
            email,
            password
        };

        let url = login?  "http://localhost:3015/auth/signin" :"http://localhost:3015/auth/signup"
        console.log(url);

        // fetch data
fetch(url, {
    method: "POST",
    headers: new Headers({
        "Content-Type": "application/json"
    }),
    body: JSON.stringify(userObject)
})
// send it there
.then(res => res.json())
// response handling
.then(json => {console.log(`USER: `,json.sessionToken);props.setSessionToken(json.sessionToken)})
.catch(err => console.log(err))
}

        // find out if it is login or signup
        // designate which path to send the post to (maybe a ternary?)
        // jsonify it
        // send it accordingly
    
        // props.setSessionToken = props.message
  return (
    <div>
      {props.message}
      <form onSubmit={authFunction}>
        <h1>{title()}</h1>
        {signupFields()}
        <label htmlFor="email">Email:</label>
        <br />
        <input
          type="text"
          size="30"
          id="email"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />             <br />
        <label htmlFor="password">Password:</label>
        <br />
        <input
          type="password"
          size="30"
          id="password"
          placeholder={"your password here"}
          onChange={(e) => setPassword(e.target.value)}
        />
    
        <div className="buttons">
            {/* vv PSEUDO CODE VV */}
            {/* document.getElement(button).addEventListener("click", loginToggle) */}
            <button className="toggle" onClick={loginToggle}>Login/Signup Toggle</button>
            {/* <br />
            <br /> */}
            <button className="toggle" type="submit">Submit User Data</button>
            <br />
        </div>
      </form>
    </div>
  );
};

export default Auth;
