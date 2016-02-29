 import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from '../components/App';


 export  function server(page, props) {
 	console.log("server"+process.env.CLIENT_SIDE);

 return new Promise((resolve, reject) => {
   

    try {
      return resolve(ReactDOMServer.renderToString(
        <App
        {...props}
          Page={page} />
      ));
    } catch (e) {
      reject(e);
    }
});
}


 export  function client(page, props) {

 console.log("client");
}
