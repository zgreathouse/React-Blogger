import axios from 'axios';

// action type constants
export const FETCH_USERS = "FETCH_USERS";
export const FETCH_USER = "FETCH_USER";
export const CREATE_USER = "CREATE_USER";
export const DELETE_USER = "DELETE_USER";

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

/*

                            Routes
http://reduxblog.herokuapp.com/api/posts         *GET posts
http://reduxblog.herokuapp.com/api/posts/:id     *GET post
http://reduxblog.herokuapp.com/api/posts         *POST post
http://reduxblog.herokuapp.com/api/posts/:id     *DELETE post

*/
