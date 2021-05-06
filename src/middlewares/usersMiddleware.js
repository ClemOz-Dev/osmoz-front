/* eslint-disable no-console */
// == Import dependencies.
import axios from 'axios';
import { API_URL } from 'src/utils';

// == Import : Local.
import {
  SUBMIT_CONTACT,
  FETCH_ONE_USER,
  FETCH_ALL_USERS,
  saveOneUser,
  saveAllUsers,
}
  from 'src/actions/users';

// Middleware configuration.
const usersMiddleware = (store) => (next) => (action) => {
  const state = store.getState();

  switch (action.type) {
    case SUBMIT_CONTACT: {
      axios.post(`${API_URL}/mail/create`, {
        content: state.users.contactTextarea + state.users.contactName + state.users.contactEmail,
        sender_id: state.auth.id,
        recipient_id: state.messages.recipient,
      })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          /* Custom ERROR TODO */
          console.log(error);
        });
      next(action);
      break;
    }

    case FETCH_ONE_USER: {
      state.users.userId = '';
      state.objects.isLoading = true;
      const userId = action.id;
      axios.get(`${API_URL}/users/${userId}`)
        .then((response) => {
          // console.log('response: ', response.data);
          state.objects.isLoading = false;
          store.dispatch(saveOneUser(response.data));
        })
        .catch((error) => {
          console.log('error:', error);
        });

      next(action);
      break;
    }

    case FETCH_ALL_USERS: {
      state.objects.isLoading = true;
      axios.get(`${API_URL}/users/read`)
        .then((response) => {
          // console.log('response: ', response.data);
          state.objects.isLoading = false;
          store.dispatch(saveAllUsers(response.data));
        })
        .catch((error) => {
          console.log('error:', error);
        });

      break;
    }

    default:
      next(action);
  }
};

// Export Middleware.
export default usersMiddleware;
