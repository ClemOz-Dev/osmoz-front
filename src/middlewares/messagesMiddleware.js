/* eslint-disable no-console */
// == Import dependencies.
import axios from 'axios';
import { API_URL } from 'src/utils';

// == Import : Local.
import { SEND_MESSAGE, FETCH_MESSAGES, saveMessages, clearState } from 'src/actions/messages';
import { fetchCurrentUsersData } from 'src/actions/auth';

// Middleware configuration.
const messagesMiddleware = (store) => (next) => (action) => {
  const token = localStorage.getItem('token');
  const state = store.getState();
  switch (action.type) {
    case SEND_MESSAGE: {

      axios.post(`${API_URL}/mail/create`, {
        content: state.messages.newMessageContent,
        users: [
          state.auth.id,
          state.messages.recipient,
        ],
        sender_id: state.auth.id,
        recipient_id: state.messages.recipient,
      }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => {
          // console.log(response);
          store.dispatch(clearState());
          store.dispatch(fetchCurrentUsersData());
        })
        .catch((error) => {
          /* Custom ERROR TODO */
          console.log(error);
        });
      next(action);
      break;
    }

    case FETCH_MESSAGES:
    
      axios.post(`${API_URL}/mail/read/sender/recipient`, {
        sender: parseInt(state.auth.id),
        recipient: parseInt(state.messages.recipient),
      })
        .then((response) => {
          // console.log('response: ', response.data);
          store.dispatch(saveMessages(response.data));
        })
        .catch((error) => {
          console.log('error:', error.response.data);
        });

      next(action);
      break;

    default:
      next(action);
  }
};

// Export Middleware.
export default messagesMiddleware;
