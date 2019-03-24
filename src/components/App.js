import React from 'react';
import Nav from './Nav'
import Main from './Main'
import Footer from './Footer'
import '../index.css'
import '../back.jpg'
import { Route, Link } from 'react-router-dom';
import CSSTransition from 'react-transition-group'




class App extends React.Component{

    constructor(props){
        super(props);

        this.state = {};
    }


render(){

const mainStyle ={
    alignContent: 'center',
    textAlign: 'center',
    color: 'white',
    display: 'flex',
}


    const imgStyle = {
    display: 'flex',
}


const carStyle = {

    display: 'flex',
}




    return(
        <div>
        <Nav />


        <Main />

        <Footer />


        </div>
    )
}

}

export default App
