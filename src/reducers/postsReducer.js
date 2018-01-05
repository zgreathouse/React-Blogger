import _ from 'lodash';
import { FETCH_POSTS, CREATE_POST } from '../actions';

const postsReducer = (state = {}, action) => {
  switch(action.type) {
    case FETCH_POSTS:
      return _.mapKeys(action.payload.data, 'id');
    default:
      return state;
  }
}

export default postsReducer;
