import { combineReducers } from 'redux';
import moment from 'moment';
import { GET_USER, GET_USER_SUCCESS, GET_USER_ERROR } from '../actions';

const me = (state = null, action) => {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        loading: true
      };
    case GET_USER_SUCCESS:
      return {
        ...action.user,
        loading: false,
        lastUpdated: moment().unix(),
        error: null
      };
    case GET_USER_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    default:
      return state;
  }
}

export default combineReducers({ me });
