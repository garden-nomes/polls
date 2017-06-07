import axios from 'axios';
import configureAxios from '../configureAxios';

export const GET_POLLS = 'GET_POLLS';
export const GET_POLLS_SUCCESS = 'GET_POLLS_SUCCESS';
export const GET_POLLS_ERROR = 'GET_POLLS_ERROR';

export const getPolls = () => dispatch => {
  dispatch({ type: GET_POLLS });

  axios.get('/api/polls', configureAxios())
    .then(response => (
      dispatch({
        type: GET_POLLS_SUCCESS,
        polls: response.data
      })
    ))
    .catch(error => (
      dispatch({
        type: GET_POLLS_ERROR,
        error: error
      })
    ));
};

export const VOTE_POLL = 'VOTE_POLL';
export const VOTE_POLL_SUCCESS = 'VOTE_POLL_SUCCESS';
export const VOTE_POLL_ERROR = 'VOTE_POLL_ERROR';

export const votePoll = (pollId, optionId) => dispatch => {
  dispatch({ type: VOTE_POLL, pollId });

  axios.put(`/api/polls/${pollId}/vote/${optionId}`, configureAxios())
    .then(response => (
      dispatch({
        type: VOTE_POLL_SUCCESS,
        poll: response.data
      })
    ))
    .catch(error => (
      dispatch({
        type: VOTE_POLL_ERROR,
        error: error,
        pollId
      })
    ));
};

export const CREATE_POLL = 'CREATE_POLL';
export const CREATE_POLL_SUCCESS = 'CREATE_POLL_SUCCESS';
export const CREATE_POLL_ERROR = 'CREATE_POLL_ERROR';

export const createPoll = (attributes) => dispatch => {
  dispatch({ type: CREATE_POLL });

  axios.post('/api/polls', attributes, configureAxios())
    .then(response => (
      dispatch({
        type: CREATE_POLL_SUCCESS,
        poll: response.data
      })
    ))
    .catch(error => (
      dispatch({
        type: CREATE_POLL_ERROR,
        error: error
      })
    ));
};
