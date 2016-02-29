import React from 'react';
import Header from './Header';
import render from '../lib/render';

class Welcome extends React.Component{


	render()
	{

		return(

<div> <h1>Welcome React isomorphic flux service-worker all in one app </h1> 
<form action="/WeatherReport">  
  <input className="submit" type="submit" value="Server side rendering demo">
  </input>
</form>
<form action="/Serviceworke">  

  <input className="submit" type="submit" value="Serviceworke  Demo">
  </input>
</form>

</div>
			);
	}
}

export default function (props) {
  return render(Welcome , props);
}