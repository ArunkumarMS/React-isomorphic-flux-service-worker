import React from 'react';
export default class MoreInfo extends React.Component 
{
  render() {
    
 return (
				<div className="tg-wrap"><table className="tg">
				  <tbody>
				  <tr>
				    <th className="tg-dx8v">Min</th>
				    <th className="tg-yw4l">Max</th>
				    <th className="tg-yw4l">sea_level</th>
				    <th className="tg-yw4l">humidity</th>
				    <th className="tg-yw4l">country</th>
				    <th className="tg-yw4l">description</th>
				  </tr>
				  
				  <tr>
				    <td className="tg-yw4l">{this.props.main.temp_min}</td>
				    <td className="tg-yw4l">{this.props.main.temp_max}</td>
				    <td className="tg-yw4l">{this.props.main.sea_level}</td>
				    <td className="tg-yw4l">{this.props.main.humidity}</td>
				    <td className="tg-yw4l">{this.props.country}</td>
				    <td className="tg-yw4l">{this.props.description}</td>
				  </tr>
				  </tbody>
				</table></div>
				);
			}
}

