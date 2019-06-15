import React, { Component } from 'react';
import {Link} from "react-router-dom";
class error extends Component {
    constructor(props){
        super(props)
    }
    render() {
        console.log(this.props);
        return (
            <div>
                404
               <Link to="/" >home</Link>
            </div>
        );
    }
}

export default error;