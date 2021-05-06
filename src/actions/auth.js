// Export.
export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';
export const CONNECT_USER = 'CONNECT_USER';
export const FETCH_CURRENT_USERS_DATA = 'FETCH_CURRENT_USERS_DATA';
export const SAVE_CURRENT_USERS_DATA = 'SAVE_CURRENT_USERS_DATA';
export const UPDATE_SETTINGS_FIELD = 'UPDATE_SETTINGS_FIELD';
export const LOG_OUT = 'LOG_OUT';
export const TOGGLE_EDITOR = 'TOGGLE_EDITOR';
export const UPDATE_CURRENT_USER = 'UPDATE_CURRENT_USER';
export const TOGGLE_CHATBOX = 'TOGGLE_CHATBOX';

//* * --------------- AUTHENTIFICATION ACTION CREATORS ----------------------- * */
export const updateSettingsField = (identifier, newValue) => ({
  type: UPDATE_SETTINGS_FIELD,
  identifier: identifier,
  value: newValue,
});

export const submitLogin = () => ({
  type: SUBMIT_LOGIN,
});

export const connectUser = (email) => ({
  type: CONNECT_USER,
  email: email,
});

export const fetchCurrentUsersData = () => ({
  type: FETCH_CURRENT_USERS_DATA,
});

export const saveCurrentUsersData = (data) => ({
  type: SAVE_CURRENT_USERS_DATA,
  data: data,
});

export const logOut = () => ({
  type: LOG_OUT,
});

export const toggleEditor = () => ({
  type: TOGGLE_EDITOR,
});

export const toggleChatbox = () => ({
  type: TOGGLE_CHATBOX,
});


export const updateCurrentUser = () => ({
  type: UPDATE_CURRENT_USER,
});
