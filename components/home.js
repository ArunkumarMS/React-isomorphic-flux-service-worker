import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Header from './Header'
import render from '../lib/render';
class home extends React.Component{
	render() {
    return (

<div className="content">


<Header />
 <form action="/report">
  Enter City Name:
  <input type="text" name="city" placeholder="city name" required>
  </input> 
  <input className="submit" type="submit" value="Submit">
  </input>
</form>
 </div>
    	);

}
}

export default function (props) {
  return render(home , props);
}