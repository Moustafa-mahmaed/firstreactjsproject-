import React, { Component } from 'react';

class Toggle extends Component {
    constructor(){
        super();
        this.state={
            visible:false
        }

    }
    togglepara=()=>{
        this.setState({
            visible:!this.state.visible
        })
    }
    render() {
        return (
            <div>
                <h1>toggle pragraph</h1>
                <button onClick={this.togglepara}>
                    {this.state.visible? "hide":"show"}
                </button>
                {this.state.visible &&<p>fff</p>}
            </div>
        );
    }
}

export default Toggle;