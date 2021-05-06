// Export.
export const UPDATE_CONTACT_FIELD = 'UPDATE_CONTACT_FIELD';
export const SUBMIT_CONTACT = 'SUBMIT_CONTACT';
export const FETCH_ONE_USER = 'FETCH_ONE_USER';
export const SAVE_ONE_USER = 'SAVE_ONE_USER';
export const FETCH_ALL_USERS = 'FETCH_ALL_USERS';
export const SAVE_ALL_USERS = 'SAVE_ALL_USERS';

//* * ----------- CONTACT ACTION CREATORS ------------ * */
export const updateContactField = (identifier, newValue) => ({
  type: UPDATE_CONTACT_FIELD,
  identifier: identifier,
  value: newValue,
});

export const submitContact = () => ({
  type: SUBMIT_CONTACT,
});

//* * ----------- USERS ACTION CREATORS ------------ * */
export const fetchOneUser = (id) => ({
  type: FETCH_ONE_USER,
  id: id,
});

export const saveOneUser = (data) => ({
  type: SAVE_ONE_USER,
  data: data,
});

export const fetchAllUsers = () => ({
  type: FETCH_ALL_USERS,
});

export const saveAllUsers = (users) => ({
  type: SAVE_ALL_USERS,
  users: users,
});
