import moment from 'moment';

import {
  GET_POLLS,
  GET_POLLS_SUCCESS,
  GET_POLLS_ERROR,
  VOTE_POLL,
  VOTE_POLL_SUCCESS,
  VOTE_POLL_ERROR,
  CREATE_POLL,
  CREATE_POLL_SUCCESS,
  CREATE_POLL_ERROR
} from '../actions';

const initialState = {
  loading: false,
  error: null,
  lastUpdated: null,
  newItem: {
    loading: false,
    error: null,
    lastUpdated: null
  },
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
    case VOTE_POLL:
      return {
        ...state,
        items: state.items.map(poll => (
          (poll._id === action.pollId) ? { ...poll, loading: true } : poll
        ))
      };
    case VOTE_POLL_SUCCESS:
      return {
        ...state,
        items: state.items.map(poll => (
          (poll._id === action.poll._id) ?
            { ...action.poll, loading: false, lastUpdated: moment().unix() } :
            poll
        ))
      };
    case VOTE_POLL_ERROR:
      return {
        ...state,
        items: state.items.map(poll => (
          (poll._id === action.pollId) ?
            { ...poll, loading: false, error: action.error } :
            poll
        ))
      };
    case CREATE_POLL:
      return {
        ...state,
        newItem: {
          ...state.newItem,
          loading: true
        }
      };
    case CREATE_POLL_SUCCESS:
      return {
        ...state,
        newItem: {
          loading: false,
          error: null,
          lastUpdated: moment().unix()
        },
        items: [
          action.poll,
          ...state.items
        ]
      };
    case CREATE_POLL_ERROR:
      return {
        ...state,
        newItem: {
          ...state.newItem,
          loading: false,
          error: action.error
        }
      };
    default:
      return state;
  }
};

export default polls;
