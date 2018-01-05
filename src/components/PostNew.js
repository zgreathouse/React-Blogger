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
    const { touched, error } = field.meta;

    return (
      <div className="form-group">
        <label>{field.label}</label>
        <input
          className="form-control"
          type="text"
          {...field.input}
        />
        {touched && error}
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

  onSubmit(values) {
    console.log(values);
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        {this.renderFields()}
        <button
          type="submit"
          className="btn btn-primary"
          text="submit"
          style={{"backgroundColor": "red", "borderColor": "darkRed"}}
        >
          Submit
        </button>
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
