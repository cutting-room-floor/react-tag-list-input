/** @jsx React.DOM */
var React = require('react'),
  TagListForm = require('./index.jsx');

var Demo = React.createClass({
  onChange: function(val) {
    console.log(val);
  },
  render: function() {
    var tags = [
      'Foo',
      'Bar',
      'Baz'
    ];
    return (
      <div>
        <TagListForm
          tags={tags}
          strict={true}
          onChange={this.onChange} />
      </div>
    );
  }
});

React.renderComponent(
  <Demo />,
  document.getElementById('app')
);
