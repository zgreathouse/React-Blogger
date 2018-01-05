import _ from 'lodash';
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { createPost } from '../actions';

const formFields = [
  {label: 'Title', name: 'title'},
  {label: 'Categories', name: 'categories'},
  {label: 'Post Content', name: 'content'}
];

class PostNew extends Component {
  renderField(field) {
    const { touched, error } = field.meta;
    const className = `form-group ${touched && error ? 'has-danger' : ''}`

    return (
      <div className={className}>
        <label>{field.label}</label>
        <input
          className="form-control"
          type="text"
          {...field.input}
        />
        <div
          className="text-help"
          style={{"fontStyle": "italic"}}
        >
          {touched && error}
        </div>
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
    this.props.createPost(values, () => {
      this.props.history.push('/');
    });
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
        >
          Submit
        </button>
        <Link to="/" className="btn btn-danger">
          Cancel
        </Link>
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
  form: 'PostsNewForm',

})(
  connect(null, { createPost })(PostNew)
);
