import _ from 'lodash';
import { FETCH_USERS } from '../actions';

const postsReducer = (state = {}, action) => {
  switch(action.type) {
    case FETCH_USERS:
      return _.mapKeys(action.payload.data, 'id');
    default:
      return state;
  }
}

export default postsReducer;
