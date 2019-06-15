import React, { Component } from 'react';

class demo1 extends Component {
   call(){
       console.log("f");
   }
    render() {
    
        return (
            <div>
               <button onClick={this.call}>click</button>
             
            </div>
        );
    }
}

export default demo1;