/** @jsx React.DOM */
var React = require('react'),
  uniq = require('uniq'),
  hash = require('okay-hash');

var TagListForm = React.createClass({
  getInitialState: function() {
    return {
      tags: [],
      tag: ''
    };
  },
  propTypes: {
    tags: React.PropTypes.array.isRequired,
    onChange: React.PropTypes.func.isRequired,
    strict: React.PropTypes.bool
  },
  tagIsValid: function(tag) {
    return this.props.tags.indexOf(this.state.tag) !== -1;
  },
  addTag: function(e) {
    e.preventDefault();
    if (!this.props.strict || this.tagIsValid(this.state.tag)) {
      this.setState({
        tags: uniq(this.state.tags.concat([this.state.tag])),
        tag: ''
      }, this.fireChange);
    }
  },
  fireChange: function() {
    this.props.onChange(this.state.tags.slice(0));
  },
  inputChange: function(e) {
    this.setState({ tag: e.target.value });
  },
  removeTag: function(tag, e) {
    this.setState({
      tags: this.state.tags.filter(function(t) {
        return t !== tag;
      })
    }, this.fireChange);
    e.preventDefault();
  },
  focusForm: function(e) {
    this.refs.tagInput.getDOMNode().focus();
  },
  render: function() {
    var currentTags = this.state.tags.reduce(function(memo, tag) {
      memo[tag] = true;
      return memo;
    }, {});
    var tagOptions = this.props.tags.filter(function(tag) {
      return !currentTags[tag];
    });
    var listId = 'tag-list-form-id' +
      hash(tagOptions.join('')).toString().replace('-', '');
    return (
      <div
        onClick={this.focusForm}
        className='tag-list-form'>
        {this.state.tags.map(function(tag) {
          return (
            <div
              className={'tag-list-item'}
              key={'tag-list-' + tag}>
              {tag}
              <a
                href='#'
                className={'tag-list-item-remove'}
                onClick={this.removeTag.bind(this, tag)}></a>
            </div>);
        }.bind(this))}
        <form onSubmit={this.addTag}>
          <input
            ref='tagInput'
            list={listId}
            value={this.state.tag}
            onChange={this.inputChange}
            className='tag-list-form-input'
            type='text'/>
          <datalist id={listId}>
            {tagOptions.map(function(tag) {
              return <option value={tag} key={'tag-list-option-' + tag} />;
            })}
          </datalist>
        </form>
      </div>
    );
  }
});

module.exports = TagListForm;
