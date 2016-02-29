import React from 'react';
import WeatherReport from  './WeatherReport';
import render from '../lib/render';
class Report extends React.Component{
	render() {
    return (

<div> <WeatherReport {...this.props} />  </div>
    	
);

}
}






export default function (props) {
  return render(Report , props);
}