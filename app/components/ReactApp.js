/** @jsx React.DOM */

var React = require('react/addons');

/* create factory with components */
//var Griddle = React.createFactory(require('griddle-react'));

/* bootstrap data */
//var fakeData = require('../data/fakeData.js').fakeData;

var ReactApp = React.createClass({

      render: function () {
        return (
          <div>
              <h1>Isomorphic Server Side Rendering with React</h1>
          </div>
        )
      }
  });

/* Module.exports instead of normal dom mounting */
module.exports = ReactApp;