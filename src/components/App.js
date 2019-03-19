import React from 'react';
import Nav from './Nav'
import Main from './Main'
import Footer from './Footer'
import '../index.css'
import '../back.jpg'
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, CardImgOverlay } from 'reactstrap';




function App(props){
    return(
        <div>
        <Card>
        <CardImgOverlay>

        <CardTitle><Nav /></CardTitle>
        
        <Main />
        <Footer />
        </CardImgOverlay>
        </Card>
        </div>
    )

}

export default App
