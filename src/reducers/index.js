import { combineReducers } from 'redux';

//reducers
import postsReducer from './postsReducer';

const rootReducer = combineReducers({
  posts: postsReducer
});

export default rootReducer;
