import React from 'react';
import '../index.css';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, CardImgOverlay, CardHeader, CardFooter, CardBlock } from 'reactstrap';


export default class CountUp extends React.Component{
    constructor(props){
        super(props);

        this.state = {};
    }


    render(){
        return(
            <div className="playholder">

            <CardText>{this.props.name}</CardText>
            <CardText>{this.props.github}</CardText>
            <CardText>{this.props.phone}</CardText>
            <CardText>{this.props.email}</CardText>

            </div>
        )

    }

}