import React from 'react';
import '../index.css'


export default class CountUp extends React.Component{
    constructor(props){
        super(props);

        
        this.state ={}

    }

    render(){
        return(
            <div className="playholder">
            <h2>{this.props.name}</h2>
            <h2>{this.props.github}</h2>
            <h2>{this.props.phone}</h2>
            <h2>{this.props.email}</h2>
            </div>
        )

    }

}