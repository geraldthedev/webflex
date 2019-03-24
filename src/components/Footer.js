import React from 'react'
import '../index.css'


class Footer extends React.Component{
constructor(props){
        super(props);

        this.state = {};
    }


render(){


    const footNavStyle = {

    color: 'black',
    padding: '10px',
    align: 'center',
    textAlign: 'center'
}

    const footConStyle ={
    padding: '10px',
    textAlign: 'center'
}


    const footHeStyle ={
    padding: '10px',
    fontWeight: 'bold',
    textAlign: 'center'
}



    return(
        <div className="foot">


       Connect:
       Github
       Instagram
       Facebook


        </div>
    )
}
}

export default Footer