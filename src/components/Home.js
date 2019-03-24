import React from 'react'

export default class Home extends React.Component{
    state = {

    }

    constructor(props){
        super(props)

        this.state = { text: 'next page' }
    }

    render(){
        return(
            <div>
            This is the Home page
            </div>
        )
    }
}