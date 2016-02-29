import request from 'request';

export  function getWeatherReport(req, res) {
  var Header = {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  };
  request.get({
      url: 'http://api.openweathermap.org/data/2.5/weather?q='+req.query.city+'&appid=92f5626d3f36274017c4dadfc6e71ebb&units=metric',
      headers: Header
    },
    function (error, response, body) {
     
      if(response.statusCode  != 200 || JSON.parse(body).cod == '404'  )
      {
        res.send('Opps somthing went wrong or city not found!!');
      }
      else
      {
        return res.render('Report.js', {
      pageTitle: req.query.city+' Weather',
      props: 
      {
      body: JSON.parse(body),
      city:req.query.city,
      response: response 
  	  }
	    });   
}
	});
}



