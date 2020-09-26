import React from "react";
import "./Navbar.css"
import piePic from "../../../assets/pie2.jpg"
import Logout from "./Logout/Logout"
import PropsDemo from "../../concepts/PropsDemo";


const Navbar =(props) =>{
    return (
        <div>
            <nav>
                <img id="piePic" src= {piePic} alt="pie" />
             <Logout setSessionToken={props.setSessionToken}/>
            </nav>
        </div>
    )
}

export default Navbar;
