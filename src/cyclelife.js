import React, { Component } from 'react';

class Cyclelife extends Component {
    constructor(){
        console.log("inside constructor");
        super();
        this.state={
            value:0
        }
        this.update1=this.update1.bind(this);
        this.update2=this.update2.bind(this);

    }
    update1(){
        this.setState({
            value:1
        })
    }

    update2(){
    alert("d",this.value);     
    }
    componentWillMount(){
        console.log("componentWillMount");
    }
    componentDidMount(){
        console.log("componentDidMount");

    }
    componentDidUpdate(){
        console.log("componentDidUpdate");

    }
    componentWillUnmount(){
        console.log("componentWillUnmount");

    }
    componentDidCatch(){
        console.log("componentDidCatch");
        
    }
    render() {
        console.log("inside render");
        return (
            <div>
              
           
                <button onClick={this.update1}>click to change updateamount</button>
                <button onClick={this.update2}>click to show updateunamount</button>
            
            </div>
        );
    }
}

export default Cyclelife;