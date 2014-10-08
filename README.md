# react-tag-list-input

An input element for a list of pre-provided tags in [React.js](http://facebook.github.io/react/).

## api

```
<TagListForm
    tags={require: an array of tags}
    onChange={required: a function called every time the list changes}
    strict={optional: true or false} />
```

Generates a specific DOM structure:

```html
<div class='tag-list-form'>
  <div class='tag-list-item'>
    tag name
    <a href='#' class='tag-list-item-remove'></a>
  </div>
  <input
    class='tag-list-form-input'
    type='text' />
</div>
```

