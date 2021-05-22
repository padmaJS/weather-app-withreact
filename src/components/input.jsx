import React, { Component } from "react";

class Input extends Component{
  state = {
    cityName : null,
  }
  setCityName = () => {
    this.setState({cityName : document.getElementById('city')})
  }
  render(){
    return(
      <div>
        <input placeholder='Enter your city' id='city'></input>
        <button onClick={ this.setCityName() }>Search</button>
      </div>
    )
  }
}

export default Input;