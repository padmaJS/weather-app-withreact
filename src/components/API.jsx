import React, { Component } from "react";

class API extends Component{
  state = {
    cityName : null,
    dataLoaded : false,
    items : null
  }
  setCityName = (e) => {
    this.setState({cityName : e.target.value})
  }
  weatherDataGetter = () =>{
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.cityName}&appid=f4a0eee4b5e6bc6d8cbb956e511528de&units=metric`)
      .then(response => response.json())
      .then(json => {
        this.setState({ cityName: '', dataLoaded : true, items : json})
      })
  }

  weatherDataShow = () =>{
    let { dataLoaded, items } = this.state;
    if (dataLoaded !== true) {
      return(<p>Loading. . .</p>)
    }else{
      return(
        <div>
          <p>City Name: {items.name}</p>
          <p>City Temperature: {items.main.temp}</p>
        </div>
      )
    }
  }
  render(){
    return(
      <div>
        <input placeholder='Enter your city' id='city' onChange={this.setCityName}></input>
        <button onClick = {this.weatherDataGetter}>Search...</button>
        <p>{this.state.dataLoaded && this.state.items.name}</p>
        <p>{this.state.dataLoaded && this.state.items.main.temp}</p>
      </div>
    )
  }
}

export default API;
