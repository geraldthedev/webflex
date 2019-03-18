import React from 'react';
import Nav from './Nav'
import Main from './Main'
import Footer from './Footer'
import '../index.css'
import '../back.jpg'
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';




function App(props){
    return(
        <div>
        <Card inverse>
        <CardBody>

        <CardTitle><Nav /></CardTitle>
        <CardImg top width ="100%" src='back.jpg' />
        <Main />
        <Footer/>
        </CardBody>
        </Card>
        </div>
    )

}

export default App
