import React, {Component} from 'react';
import {connect} from "react-redux";
import Chart from '../components/chart';
class Weather_list extends Component {

  constructor(props) {

    super(props);
    this.renderWeather = this.renderWeather.bind(this)
  }

renderWeather(cityData) {
    const  name = cityData.city.name;
    const temps = cityData.list.map( weather => weather.main.temp)
    const humidity = cityData.list.map( weather => weather.main.humidity)
    const pressure = cityData.list.map( weather => weather.main.pressure)
    return (

        <tr key= {name} >
            <td>
                {name}
            </td>
            
                <Chart data  = {temps} color = "orange" units="K" />
                 <Chart data  = {pressure} color = "blue" units="hPa"  />
                  <Chart data  = {humidity} color = "black" units='%' />

        </tr>
    )

}

  render() {
    return (
        <table className="table table-hover">
                <thead>
                    <tr>
                        <th> City</th>
                         <th> Temperature (K) </th>
                          <th> Pressure (hPa)</th>
                          <th> Humidity (%) </th>
                     </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                
                </tbody>
        </table>

    )
  }

}                   //state.weather
// connectiong to reducers
function MapStateToProps({ weather }){

    return {weather}
}

export default connect(MapStateToProps)( Weather_list);
