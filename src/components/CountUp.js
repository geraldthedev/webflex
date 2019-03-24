import React from 'react';
import '../index.css';



export default class CountUp extends React.Component{
    constructor(props){
        super(props);

        this.state = {};
    }


    render(){
        return(
            <div className="playholder">

            {this.props.name}
            {this.props.github}
            {this.props.phone}
            {this.props.email}

            </div>
        )

    }

}