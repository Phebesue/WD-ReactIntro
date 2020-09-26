import React, { useState, useEffect } from "react";
import "../../App.css";
import Navbar from "./Navbar/Navbar";
import Auth from "./Auth/Auth";
import Pies from "./Pies/Pies";
// import Logout from "./Navbar/Logout/Logout";

function MainPie() {
  const [sessionToken, setSessionToken] = useState(undefined);
  //  let sessionToken = value, let setSessionToken = function(newValue) {sessionToken = newValue}
  console.log(sessionToken);

  // WILL UPDATE WHEN SESSION TOKEN GETS A NEW VALUE
useEffect(() => console.log("session token has changed"),[sessionToken])

// WILL ONLY RUN ONCE WHEN THE PAGE LOADS
//  useEffect(() => console.log("session token iz initialized"), [])

// WILL RUN WHEN
// useEffect(() => console.log("session token has changed"))



  const viewConductor = () => {
    return sessionToken ? (
      <Pies sessionToken={sessionToken}/>
    ) : (
    //   <Auth message="Hello from App.js" setSessionToken={setSessionToken} />
      <Auth setSessionToken={setSessionToken} />
    );
  };
  return (
    <div className="App">
      <Navbar setSessionToken={setSessionToken}/>
      {/* <h1>Main Pie Connected!</h1> */}
      {/* <Auth /> */}
      {/* <Auth message="Hello from MainPie.js" setSessionToken={setSessionToken} /> */}
      {/* {sessionToken} */}

      {/* if I hv a sessionToken I want to see Pies, otherwise see Auth Form */}
      {viewConductor()}
    </div>
  );
}
// const MainPie =() => {
//     return(
//         <div>Main Pie is connected</div>
//     )
// }

export default MainPie;
