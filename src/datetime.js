import React, { Component } from 'react';

class datetime extends Component {
    constructor(){
        super();
        this.timeupdate=this.timeupdate.bind(this);
        this.timestart=this.timestart.bind(this);
        this.state={
            time:new Date().toLocaleString()
        }
        
    }
    timestart(){

        setInterval(this.timeupdate, 1000);
    }

    timeupdate(){
       
        this.setState({time:new Date().toLocaleString()})
        
       
    }
    render() {
        return (
            <div >
               <h1> {this.state.time}</h1>
                <button onClick={this.timestart}>start</button>
            </div>
        );
    }
}

export default datetime;