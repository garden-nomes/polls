import axios from 'axios';

export const GET_POLLS = 'GET_POLLS';
export const GET_POLLS_SUCCESS = 'GET_POLLS_SUCCESS';
export const GET_POLLS_ERROR = 'GET_POLLS_ERROR';

export const getPolls = () => dispatch => {
  dispatch({ type: GET_POLLS });

  setTimeout(() => {
  axios.get('/api/polls')
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
  }, 1000);
};

export const VOTE_POLL = 'VOTE_POLL';
export const VOTE_POLL_SUCCESS = 'VOTE_POLL_SUCCESS';
export const VOTE_POLL_ERROR = 'VOTE_POLL_ERROR';

export const votePoll = (pollId, optionId) => dispatch => {
  dispatch({ type: VOTE_POLL, pollId });

  setTimeout(() => {
  axios.put(`/api/polls/${pollId}/vote/${optionId}`)
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
  }, 1000);
};
