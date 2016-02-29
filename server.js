import express from 'express';
import fs from 'fs';
import jade from 'jade';
import path  from 'path';
import reactViewEngine from './lib/react-view-engine';
import {getWeatherReport} from './routes/report';
const app = express();
const layoutPath = path.join(__dirname, 'views/layout.jade');
const layout = fs.readFileSync(layoutPath, 'utf8');
const layoutFn = jade.compile(layout, {filename: layoutPath});
app.use(express.static(__dirname + '/assets'));
app.set('views', path.join(__dirname, 'components'));
app.engine('js', reactViewEngine(layoutFn));

app.set('port', process.env.OPENSHIFT_NODEJS_PORT || process.env.PORT || 5000);
app.set('ip', process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1");
app.get('/',(req, res) =>{
 return res.render('home.js', {
      pageTitle: 'Welcome..',
      props: 
      {
      home:'WeatherReport'
  	  }
	    }); 
});
app.get('/report', getWeatherReport);

const server = app.listen(app.get('port'),app.get('ip'), () => {
   console.log(JSON.stringify(server.address())); 
});
