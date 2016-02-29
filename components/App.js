
import React from 'react';

export default class App extends React.Component {

 propTypes : {

    Page: React.PropTypes.func.isRequired
};


render(){
	const {Page, ...pageProps} = this.props;

return (
	
	<Page {...pageProps} />
	
	
	 );
}
}
