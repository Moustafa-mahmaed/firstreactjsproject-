import React from "react";



class Input extends React.Component {
  constructor(props) { 
    super(props);
    this.state = { 
      value: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) { 
    this.setState({ value: event.target.value });
    console.log(this.state.value);
  }

  render() { 
    return (
      <div>
        <input
          name="firstName"
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
        {this.state.value}
      
      </div>
    );
  }
}
export default Input