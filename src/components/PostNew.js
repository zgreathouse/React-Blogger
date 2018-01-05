import _ from 'lodash';
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

//components


const formFields = [
  {label: 'Title', name: 'title'},
  {label: 'Categories', name: 'categories'},
  {label: 'Post Content', name: 'content'}
];

class PostNew extends Component {
  renderField(field) {
    return (
      <div className="form-group">
        <label>{field.label}</label>
        <input
          className="form-control"
          type="text"
          {...field.input}
        />
      </div>
    )
  }

  renderFields() {
    return _.map(formFields, ({ label, name }) => {
      return (
        <Field
          key={name}
          component={this.renderField}
          type="text"
          label={label}
          name={name}
        />
      );
    })
  }

  render() {
    return (
      <form>
        {this.renderFields()}
      </form>
    )
  }
}

const validate = values => {
  const errors = {};

  //validate inputs
  if (!values.title) {
    errors.title = "Please enter a title!";
  }

  if (!values.categories) {
    errors.categories = "Please enter at least one category!";
  }
  
  if (!values.content) {
    errors.content = "Please enter some content!";
  }

  return errors;
}

export default reduxForm({
  validate,
  form: 'PostsNewForm'
})(PostNew);
