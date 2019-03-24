import React from 'react'

import Home from './Home';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";



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

const Home = () =>(
    <div>
    <Home />
    </div>

);

const Profile = () =>(
    <div>
    <Home />
    </div>

);

const Projects = () =>(
    <div>
    <Home />
    </div>

);

const Contact = () =>(
    <div>
    <Home />
    </div>

);

const About = () =>(
    <div>
    <Home />
    </div>

);

    return(

        <div className="navi">




       <Link to="/components/Home"> Home</Link>


        Profile


        Projects


        Contact


        About



        <Route path="/components/Home" component={ Home }/>
        </div>


    );
}
}

export default Navi