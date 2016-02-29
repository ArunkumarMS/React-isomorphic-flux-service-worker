import 'babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
let propsJson = document.documentElement.getAttribute('data-props');
let props;
if (propsJson) {
  try {
    props = JSON.parse(propsJson);
  } catch (e) {
    // At this point something is seriously wrong but catching the error
    // prevents all other JavaScript from stopping as well.
    console.error('There was an error trying to parse "data-props"'); //eslint-disable-line no-console
  }
}

locales(document.documentElement.getAttribute('lang'));

const dispatcher = window.dispatcher = new Dispatcher();

export default function(Page) {
  return ReactDOM.render(
    <App
      {...props}
      dispatcher={dispatcher}
      Page={Page} />,
    document.getElementById('content')
  );
}
