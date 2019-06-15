import React, { Component } from 'react';

class Try extends Component {
    render() {
        console.log(this.props.match.params.id)
        return (
            <div>
              <h1>  try id</h1>
              <p>{this.props.match.params.id}</p>
            </div>
        );
    }
}

export default Try;