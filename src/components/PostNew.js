import _ from 'lodash';
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { createPost } from '../actions';

const FIELDS = {
  title: {
    label: 'Title',
    name: 'title',
    type: 'input',
    errorMessage: 'a title'
  },
  categories: {
    label: 'Categories',
    name: 'categories',
    type: 'input',
    errorMessage: 'a category'
  },
  content: {
    label: 'Post Content',
    name: 'content',
    type: 'textarea',
    errorMessage: 'some content'
  }
};

class PostNew extends Component {
  renderField(field) {
    const { touched, error } = field.meta;
    const className = `form-group ${touched && error ? 'has-danger' : ''}`

    return (
      <div
        className={className}
      >
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
    return _.map(FIELDS, ({ label, name, type }) => {
      return (
        <Field
          key={name}
          component={this.renderField}
          type={type}
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
      <form
        onSubmit={handleSubmit(this.onSubmit.bind(this))}
        style={{marginTop: "50px"}}
      >
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
  _.each(FIELDS, ({name, errorMessage}) => {
    if (!values[name]) {
      errors[name] = `Please enter ${errorMessage}.`;
    }
  });

  return errors;
}

export default reduxForm({
  fields: _.keys(FIELDS),
  form: 'PostsNewForm',
  validate,

})(
  connect(null, { createPost })(PostNew)
);
