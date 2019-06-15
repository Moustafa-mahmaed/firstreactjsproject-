import React, { Component } from 'react';
import { Link} from "react-router-dom";

class Home extends Component {
  
    render() {
        
        return (
            <div>
                <ul>
                <li><Link to="/">home</Link> </li>
                <li><Link to="/demo1">demo1</Link> </li>
                    <li><Link to="/demo2">dmo2</Link> </li>
                   
                </ul>
            </div>
        );
    }
}

export default Home;