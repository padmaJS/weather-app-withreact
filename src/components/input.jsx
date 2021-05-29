import React, { Component } from "react";
import WeatherAPI from "./weatherAPI"

class Input extends Component{
  state = {
    cityName : null,
    
  }
  setCityName = (e) => {
    this.setState({cityName : e.target.value})
  }
  handleClick = () =>{

  }
  render(){
    return(
      <div>
        <input placeholder='Enter your city' id='city' onChange={this.setCityName}></input>
        <button onClick={this.handleClick}>Search</button>
        <p>{this.state.cityName}</p>
        <WeatherAPI city={this.state.cityName}/>
      </div>
    )
  }
}

export default Input;