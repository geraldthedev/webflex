import React from 'react';
import Nav from './Nav'
import Main from './Main'
import Footer from './Footer'
import '../index.css'
import '../back.jpg'
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, CardImgOverlay, CardHeader, CardFooter } from 'reactstrap';




function App(props){
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
        <CardImg width = "100%" src={require("../back.jpg")} style ={imgStyle}/>
        <CardImgOverlay>
        <CardBody style={mainStyle}><Main style={mainStyle} /></CardBody>
        </CardImgOverlay>
        <CardFooter><Footer /></CardFooter>

        </Card>
        </div>
    )

}

export default App
