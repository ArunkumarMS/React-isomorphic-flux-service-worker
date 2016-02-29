import React from 'react';
import MoreInfo from './MoreInfo'
export default class WeatherReport extends React.Component {
  render() {
    
 return (
 	
         <div className="report-main">
           <span className="report">Current temperature in 
           <p>{this.props.city}</p>
           <p> {this.props.body.main.temp} &#8451; <img src={"http://openweathermap.org/img/w/" +this.props.body.weather[0].icon+".png"}></img> 
           </p>
           </span>
           <a href='http://localhost:5000/'> &lt; &lt; Go Back </a> 
            <div className="info">
             <MoreInfo  main={this.props.body.main} description={this.props.body.weather[0].description} country={this.props.body.sys.country}/> 
             </div>        
 		</div>
        );
  }


}

