import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostsIndex extends Component {
  render() {
    return (
      <div>Posts Index</div>
    )
  }
}

export default connect(null, { fetchPosts })(PostsIndex);
