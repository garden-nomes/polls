import axios from 'axios';
import configureAxios from '../configureAxios';

export const GET_USER = 'GET_USER';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const GET_USER_ERROR = 'GET_USER_ERROR';

export const getUser = () => dispatch => {
  dispatch({ type: GET_USER });

  axios.get('/api/users/me', configureAxios())
    .then((response) => (
      dispatch({
        type: GET_USER_SUCCESS,
        user: response.data
      })
    ))
    .catch((error) => (
      dispatch({
        type: GET_USER_ERROR,
        error: error
      })
    ));
}
