import React from 'react'
import { Nav, NavItem, Button, NavLink } from 'reactstrap'
import Home from './Home';


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
    padding: '10px',
    alignContent: 'center',
    alignItems: 'center',
    display: 'flex'
}
    return(

        <div className="navi">
        <Nav style={navStyle}>

        <NavItem style={conStyle} onClick={this.handleClick} >
        <NavLink>Home</NavLink>
        </NavItem>
        <NavItem style={conStyle}>Profile</NavItem>
        <NavItem style={conStyle}>Projects</NavItem>
        <NavItem style={conStyle}>Contact</NavItem>
        <NavItem style={conStyle}>About</NavItem>


        </Nav>
        </div>

    );
}
}

export default Navi