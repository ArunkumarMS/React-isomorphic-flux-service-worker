
import {server} from './server';


export default process.env.CLIENT_SIDE == true ? require('./client') : server ;