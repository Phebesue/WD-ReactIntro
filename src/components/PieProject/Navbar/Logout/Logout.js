import React,{useState} from "react";
import "./Logout.css"
import logoutPic from "../../../../assets/logout.png"

const Logout = (props) =>{
    // const [sessionToken, setSessionToken] = useState(undefined);
    return(
        <div>
                    <input type="image" src={logoutPic} id="logout" alt="Logout" 
                    onClick={(e) => props.setSessionToken(undefined)}/>
            {/* <img id="logout" className="logout" src={logoutPic} alt="logout"/> */}
        </div>
    )
}

export default Logout;