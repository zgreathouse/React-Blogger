import axios from 'axios';

// action type constants
export const FETCH_POSTS = "FETCH_POSTS";
export const CREATE_POST = "CREATE_POST";
export const FETCH_POST = "FETCH_POST";
export const DELETE_POST = "DELETE_POST";

const ROOT_URL = "http://reduxblog.herokuapp.com/api";
const API_KEY = "?key=reactblogger"


//action creators
export const fetchPosts = () => {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

  return {
    type: FETCH_POSTS,
    payload: request
  };
}

export const createPost = (values, callback) => {
  const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, values)
    .then(() => callback());

  return {
    type: CREATE_POST,
    payload: request
  };
}

export const fetchPost = id => {
  const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);

  return {
    type: FETCH_POST,
    payload: request
  };
}

/*

                            Routes
http://reduxblog.herokuapp.com/api/posts         *GET posts
http://reduxblog.herokuapp.com/api/posts/:id     *GET post
http://reduxblog.herokuapp.com/api/posts         *POST post
http://reduxblog.herokuapp.com/api/posts/:id     *DELETE post

*/
