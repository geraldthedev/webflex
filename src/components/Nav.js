import React from 'react'
import { Nav } from 'reactstrap'
import { NavItem } from 'reactstrap'
import { Button } from 'reactstrap'
import '../index.css'


function Navi(props){
    return(

        <div className="navi">
        <Nav>

        <NavItem>Home</NavItem>
        <NavItem>Profile</NavItem>
        <NavItem>Projects</NavItem>
        <NavItem>Contact</NavItem>
        <NavItem>About</NavItem>


        </Nav>
        </div>

    );
}

export default Navi