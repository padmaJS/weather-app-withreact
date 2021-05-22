import React, { Component } from "react";

class WeatherAPI extends Component {
  constructor(props){
    super(props);
    this.state = {
      dataLoaded : false,
      items : null
    }
  }
  weatherDataGetter(){
    fetch('http://api.openweathermap.org/data/2.5/forecast?q=London&appid=f4a0eee4b5e6bc6d8cbb956e511528de&units=metric')
      .then(response => response.json())
      .then(json => {
        this.setState({ dataLoaded : true, items : json})
      })
  }
  render(){
    let {dataLoaded, items} = this.state;
    if(!dataLoaded){
      return <div>Loading...{ items == null && "fuck"}</div>
    }else{
      return(
        <p>{items}Hi</p> 
      );
    }
  }
}
export default WeatherAPI;