import React, { Component } from "react"
import Input from "./input"
import WeatherAPI from "./weatherAPI"

class AllComponents extends Component{
  render(){
    return(
      <div>
        <Input />
        <WeatherAPI />
      </div>
    )
  }
}
export default AllComponents;