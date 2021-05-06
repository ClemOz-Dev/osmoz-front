/* eslint-disable no-console */
// == Import dependencies.
import axios from 'axios';
import { API_URL } from 'src/utils';

// == Import : Local.
import {
  SUBMIT_LOGIN,
  connectUser,
  FETCH_CURRENT_USERS_DATA,
  saveCurrentUsersData,
  UPDATE_CURRENT_USER,
  fetchCurrentUsersData
}
  from 'src/actions/auth';

// Middleware configuration.
const authMiddleware = (store) => (next) => (action) => {
  const state = store.getState();
  const { token } = window.localStorage;
  switch (action.type) {
    case SUBMIT_LOGIN: {
      axios.post(`${API_URL}/login`, {
        username: state.auth.email,
        password: state.auth.password,
      })
        .then((response) => {
          // console.log(response);
          localStorage.setItem('token', response.data.token);
          localStorage.setItem('email', state.auth.email);
          store.dispatch(connectUser());
        })
        .catch((error) => {
          /* Custom ERROR TODO */
          console.log(error);
        });
      next(action);
      break;
    }
    case FETCH_CURRENT_USERS_DATA: {
      const { email } = window.localStorage;
      axios.get(`${API_URL}/users/read/email/${email}`,
        {
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          // console.log('response: ', response.data);
          store.dispatch(saveCurrentUsersData(response.data));
        })
        .catch((error) => {
          console.log('error:', error);
        });

      next(action);
      break;
    }

    case UPDATE_CURRENT_USER: {
      const currentUserId = state.auth.id;
      axios.patch(`${API_URL}/users/patch/${currentUserId}`,
        {
          nickname: state.auth.nickname,
          location: state.auth.zipcode,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          // console.log('response: ', response);
          store.dispatch(fetchCurrentUsersData());
        })
        .catch((error) => {
          console.log('error:', error);
        });

      next(action);
      break;
    }

    default:
      // Sending action to the next middleware
      // or to the reducer if this is the last one
      next(action);
  }
};

// Export Middleware.
export default authMiddleware;
