import React from 'react'
import '../index.css'
import { Nav, NavItem, Button } from 'reactstrap'

function Footer(props){

const footNavStyle = {

    color: 'black',
    padding: '10px',
    align: 'center',
    textAlign: 'center'


};

const footConStyle ={
    padding: '10px',
    textAlign: 'center'
};

const footHeStyle ={
    padding: '10px',
    fontWeight: 'bold',
    textAlign: 'center'
}

    return(
        <div className="foot">
       <Nav style={footNavStyle}>

       <NavItem style={footHeStyle}>Connect: </NavItem>
       <NavItem style={footConStyle}>Github</NavItem>
       <NavItem style={footConStyle}>Instagram</NavItem>
       <NavItem style={footConStyle}>Facebook</NavItem>

       </Nav>
        </div>
    )
}

export default Footer