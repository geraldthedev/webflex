import React from 'react'
import CountUp from './CountUp';
import '../index.css'


class Main extends React.Component{

     constructor(props){
        super(props);

        this.state = {};
    }

render(){
    return(
        <div>
        <CountUp
        name="Gerald Bryant"
        github="https://github.com/hakeem1106"
        phone="555-555-5555"
        email="testprops@fakemail.com"
         />
        </div>
    )
}
}

export default Main