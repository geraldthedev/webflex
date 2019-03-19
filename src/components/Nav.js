import React from 'react'
import { Nav, NavItem, Button, } from 'reactstrap'

import '../index.css'


function Navi(props){

const navStyle = {

    background:  'cadetblue',
    color: 'white',
    padding: '10px',
    alignContent: 'center',
    alignItems: 'center',
    display: 'flex'


};

const conStyle ={
    padding: '10px',
    alignContent: 'center',
    alignItems: 'center',
    display: 'flex'
}

    return(

        <div className="navi">
        <Nav style={navStyle}>

        <NavItem style={conStyle} >Home</NavItem>
        <NavItem style={conStyle}>Profile</NavItem>
        <NavItem style={conStyle}>Projects</NavItem>
        <NavItem style={conStyle}>Contact</NavItem>
        <NavItem style={conStyle}>About</NavItem>


        </Nav>
        </div>

    );
}

export default Navi