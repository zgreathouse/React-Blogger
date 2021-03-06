//This component is an index of all the posts
import _ from 'lodash';
import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPosts } from '../actions';

class PostsIndex extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderPosts() {
    return _.map(this.props.posts, post => {
      return (
        <li key={post.id} className="list-group-item">
          <Link to={`posts/${post.id}`}>
            {post.title}
          </Link>
        </li>
      );
    });
  }

  render() {
    return (
      <div>
        <div className="text-xs-right">
          <Link
            to="/posts/new"
            className="btn btn-primary"
            style={{marginTop: "15px"}}
          >
            Add a Post!
          </Link>
        </div>
        <h3>Posts</h3>
        <ul className="list-group" style={{marginTop: "20px"}}>
          {this.renderPosts()}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  posts: state.posts
})

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);
