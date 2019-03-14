import React from 'react';
import nowConn from '../app'


export default class PostIt extends React.Component {
beginAgain =() =>{

}

     render(){
         return(
             <div className="Getter">
             <form method="post" action="/app" >
             <button onClick={this.beginAgain} >Start</button>
             </form>

             </div>
         )


     }
 }