import { combineReducers } from 'redux';

//reducers
import postsReducer from './postsReducer';
import { reducer as FormReducer } from 'redux-form';

const rootReducer = combineReducers({
  posts: postsReducer,
  form: FormReducer
});

export default rootReducer;
