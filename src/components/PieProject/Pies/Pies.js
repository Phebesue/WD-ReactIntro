import React, { useState, useEffect } from "react";
import "./Pies.css";
import {
    Card,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
    Button,
    Container,
    Row,
    Col,
  } from "reactstrap";

const Pies = (props) => {
  // fetch all pies authorized by session token
  const [pies, setPies] = useState(true);
  const [inventory, setInventory] = useState([]);


  useEffect(() => {
      console.log("hello");
      let a=1;
      a+=1;
      console.log(a);
    
    //   fetch the data
let url= "http://localhost:3015/pies";
fetch(url,{
    method: "GET",
    headers: new Headers({
        "Content-Type": "application/json",
        "Authorization": props.sessionToken
    })
   
})
// jsonify it
.then(res => res.json())
// console.log it
.then(json => {console.log(json); setInventory(json)})
// 
.catch(err => console.log(err))
    },[])
//   ERROR: Cannot call a useEffect as a callback function
// useEffect(() =>{
    // console.log("hello");
    // useEffect(() => {console.log("testing within hello")},[])


  return (

    <Row>{
        inventory.length >0?
        // pit data here
            
            inventory.map(pie =>     
        <Col xs="12" sm="4">
        <Card>
            <CardTitle>{pie.nameOfPie}</CardTitle>
            <CardBody>  {pie.crust} </CardBody>
      
        </Card>
        </Col>) :
        // do nothing here
        ""
    }
        </Row>
 
    
  
        /* display all pies with a child component */
        
        
        );
        // <button onClick={() => {setPies(!pies)}}>TOGGLE EXAMPLE</button>
  }
export default Pies;
