import axios from 'axios';

export const GET_POLLS = 'GET_POLLS';
export const GET_POLLS_SUCCESS = 'GET_POLLS_SUCCESS';
export const GET_POLLS_ERROR = 'GET_POLLS_ERROR';

export const getPolls = () => dispatch => {
  dispatch({ type: GET_POLLS });

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
};
