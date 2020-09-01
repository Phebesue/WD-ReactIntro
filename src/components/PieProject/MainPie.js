import React,{useState} from "react";
import "../../App.css";
import Navbar from "./Navbar/Navbar";



function MainPie(){
const [sessionToken, setSessionToken] = useState(undefined);
//  let sessionToken = value, let setSessionToken = function(newValue) {sessionToken = newValue}
    return(
        <div className="App">
            <Navbar />
            <h1>Main Pie Connected!</h1>
            {sessionToken}
</div>
    )
    
}
// const MainPie =() => {
//     return(
//         <div>Main Pie is connected</div>
//     )
// }

export default MainPie;