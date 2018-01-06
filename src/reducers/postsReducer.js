import _ from 'lodash';
import { FETCH_POSTS, FETCH_POST, DELETE_POST } from '../actions';

const postsReducer = (state = {}, action) => {
  switch(action.type) {
    case FETCH_POST:
      const { data } = action.payload;
      return { ...state, [data.id]: data };

    case FETCH_POSTS:
      return _.mapKeys(action.payload.data, 'id');

    case DELETE_POST:
      return _.omit(state, action.payload);

    default:
      return state;
  }
}

export default postsReducer;
