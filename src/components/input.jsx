import React, { Component } from "react";

class Input extends Component{
  state = {
    cityName : null,
  }
  setCityName = (e) => {
    this.setState({cityName : e.target.value})
  }
  render(){
    return(
      <div>
        <input placeholder='Enter your city' id='city' onChange={this.setCityName}></input>
        <p>{this.state.cityName}</p>
      </div>
    )
  }
}

export default Input;