import path from 'path';
import slash from 'slash';

/**
 * Renders a React page component
 * @param  {Function} layoutFn function to call with final state
 */
export default function(layoutFn) {
  return (view, locals, callback) => {

    locals.props = Object.assign({}, locals._locals.props, locals.props); 
    delete locals._locals;
    delete locals.cache;
    delete locals.settings;
    const page = require(path.relative(__dirname, view));
    const renderStart = Date.now();
    page(locals.props)
      .then((content) => {
        if (locals.renderTimeCallback != null) {
          locals.renderTimeCallback(renderStart, Date.now());
        }
        locals.content = content;
        locals = Object.assign({}, locals, locals.props);       
        callback(null, layoutFn(locals));
      })
      .catch((err) => {
        return callback(err);
      });
      
  };
}
