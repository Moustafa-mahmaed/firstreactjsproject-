import React, { Component } from 'react';

class dEMO3 extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div>
                <h1>fff</h1>
                {this.props.children}
            </div>
        );
    }
}

export default dEMO3;