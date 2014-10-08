/** @jsx React.DOM */
var React = require('react'),
  TagListForm = require('./index.jsx');

var Demo = React.createClass({
  render: function() {
    var tags = [
      'Foo',
      'Bar',
      'Baz'
    ];
    return (
      <div>
        <TagListForm tags={tags} strict={true} />
      </div>
    );
  }
});

React.renderComponent(
  <Demo />,
  document.getElementById('app')
);
