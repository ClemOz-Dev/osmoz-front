// Export.
export const FETCH_MESSAGES = 'FETCH_MESSAGES';
export const SAVE_MESSAGES = 'SAVE_MESSAGES';
export const UPDATE_MESSAGE_FIELD = 'UPDATE_MESSAGE_FIELD';
export const SELECT_INTERLOCUTOR = 'SELECT_INTERLOCUTOR';
export const SEND_MESSAGE = 'SEND_MESSAGE';
export const FETCH_ONE_MESSAGE = 'FETCH_ONE_MESSAGE';
export const SAVE_CONVERSATIONS = 'SAVE_CONVERSATIONS';
export const SAVE_ALL_USERS = 'SAVE_ALL_USERS';
export const CLEAR_STATE = 'CLEAR_STATE';

//* * --------------- MESSAGES/CONVERSATIONS ACTION CREATORS ----------------------- * */
export const fetchMessages = () => ({
  type: FETCH_MESSAGES,
});

export const saveMessages = (mails) => ({
  type: SAVE_MESSAGES,
  mails: mails,
});

export const updateMessageField = (value) => ({
  type: UPDATE_MESSAGE_FIELD,
  value: value,
});

export const selectInterlocutor = (id) => ({
  type: SELECT_INTERLOCUTOR,
  id: id,
});

export const sendMessage = () => ({
  type: SEND_MESSAGE,
});

export const fetchOneMessage = () => ({
  type: FETCH_ONE_MESSAGE,
});

export const saveConversations = (conversations) => ({
  type: SAVE_CONVERSATIONS,
  conversations: conversations,
});

export const saveAllUsers = (users) => ({
  type: SAVE_ALL_USERS,
  users: users,
});

export const clearState = () => ({
  type: CLEAR_STATE,
});
