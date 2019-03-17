import React from 'react';


export default class CountUp extends React.Component{

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