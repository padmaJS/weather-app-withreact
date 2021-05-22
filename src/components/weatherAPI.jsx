import React, { Component } from "react";

class WeatherAPI extends Component {
  state = {
    dataLoaded : false,
    items : null
  }
  weatherDataGetter(){
    fetch('http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=f4a0eee4b5e6bc6d8cbb956e511528de&units=metric')
      .then(response => response.json())
      .then(json => {
        this.setState({ dataLoaded : true, items : json})
      })
  }
  render(){
    let {dataLoaded, items} = this.state;
    if(!dataLoaded){
      return <div>Loading...</div>
    }else{
      return(
        <p>{items}{dataLoaded && "fu"}Hi</p> 
      );
    }
  }
}
export default WeatherAPI;