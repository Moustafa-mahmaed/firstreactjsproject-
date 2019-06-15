import React, { Component } from 'react';

class Counter extends Component {
    constructor(props){
        super(props);
        console.log(props)
        this.increment=this.increment.bind(this);
        this.decrement=this.decrement.bind(this);
        this.reset=this.reset.bind(this);

        this.state={
            count:0
        }

    }

    increment(){
        // console.log("increment");
        // this.setState(()=>{
        //     return{

        //         count:this.state.count+1
        //     }
        // })

        this.setState({
            count:this.state.count+1
        })
            
     
    }
    decrement(){
        console.log("decrement");
        this.setState({
            count:this.state.count-1
        })
    }
    reset(){
        console.log("reset");
        this.setState({
            count:0
        })
    }
    render() {
        // console.log(this.props.match.params);
        return (
            <div>
                <h1>counter</h1>
                <p>{this.state.count}</p>
                <button onClick={this.increment}>increament</button>
                <button  onClick={this.decrement}>decrement</button>

                <button  onClick={this.reset}>reset</button>
                  
            </div>
        );
    }
}

export default Counter;