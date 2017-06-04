import moment from 'moment';

import {
  GET_POLLS,
  GET_POLLS_SUCCESS,
  GET_POLLS_ERROR,
  VOTE_POLL,
  VOTE_POLL_SUCCESS,
  VOTE_POLL_ERROR
} from '../actions';

const initialState = {
  loading: false,
  error: null,
  lastUpdated: null,
  items: []
};

const polls = (state = initialState, action) => {
  switch (action.type) {
    case GET_POLLS:
      return {
        ...state,
        loading: true
      };
    case GET_POLLS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        lastUpdated: moment().unix(),
        items: action.polls
      };
    case GET_POLLS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
        lastUpdated: moment().unix()
      };
    case VOTE_POLL_SUCCESS:
      return {
        ...state,
        items: state.items.map(poll => (
          (poll._id === action.poll._id) ? action.poll : poll
        ))
      };
    default:
      return state;
  }
};

export default polls;
