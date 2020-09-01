import React from "react";
import "./Logout.css"
import logoutPic from "../../../../assets/logout.png"

const Logout = (props) =>{

    return(
        <div>
            <img id="logout" className="logout" src={logoutPic} alt="logout"/>
        </div>
    )
}

export default Logout;