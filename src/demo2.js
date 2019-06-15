import React, { Component } from 'react';

class demo2 extends Component {
    constructor(props){
        super(props)

    }
    render() {
        console.log(this.props)
        return (
            <div>
                demo2
               <h2> {this.props.title}</h2>
            </div>
        );
    }
}

export default demo2;