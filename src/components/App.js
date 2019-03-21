import React from 'react';
import Nav from './Nav'
import Main from './Main'
import Footer from './Footer'
import '../index.css'
import '../back.jpg'
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, CardImgOverlay, CardHeader, CardFooter } from 'reactstrap';




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
        <Card style={carStyle}>



        <CardHeader><Nav /></CardHeader>
        <CardImg src={require("../back.jpg")}/>

        <CardBody><Main /></CardBody>

        <CardFooter><Footer /></CardFooter>

        </Card>
        </div>
    )
}

}

export default App
