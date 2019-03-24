import React from 'react'
import { Nav, NavItem, Button, NavLink } from 'reactstrap'
import Home from './Home';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";



import '../index.css'


class Navi extends React.Component {

    constructor(props){
        super(props);
        this.handleClick= this.handleClick.bind(this);

    }
    handleClick(){

    }


render(){

    const navStyle = {
    color: 'black',
    padding: '10px',
    alignContent: 'center',
    alignItems: 'center',
    display: 'flex'


}

const conStyle ={
    alignContent: 'center',
    alignItems: 'center',
    display: 'flex'
}
    return(
        <Router>
        <div className="navi">

        <Nav style={navStyle}>

        <NavItem style={conStyle} onClick={this.handleClick} >
        <NavLink href="./components/Home.js">
         Home</NavLink>
        </NavItem>
        <NavItem style={conStyle}>
        <NavLink>Profile</NavLink>
        </NavItem>
        <NavItem style={conStyle}>
        <NavLink>Projects</NavLink>
        </NavItem>
        <NavItem style={conStyle}>
        <NavLink>Contact</NavLink>
        </NavItem>
        <NavItem style={conStyle}>
        <NavLink>About</NavLink>
        </NavItem>
        </Nav>


        </div>
        </Router>

    );
}
}

export default Navi