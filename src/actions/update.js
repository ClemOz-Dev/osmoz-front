// Export.
export const UPDATE_UPDATE_FIELD = 'UPDATE_UPDATE_FIELD';
export const ADD_OBJECT = 'ADD_OBJECT';
export const ADD_USER = 'ADD_USER';
export const TOGGLE_FILTER = 'TOGGLE_FILTER';
export const SELECT_MEDIA = 'SELECT_MEDIA';

export const UPDATE_INPUT_SEARCH = 'UPDATE_INPUT_SEARCH';
export const UPDATE_SELECT = 'UPDATE_SELECT';
export const FETCH_OBJECT_BY_KEYWORD = 'FETCH_OBJECT_BY_KEYWORD';
export const FETCH_OBJECT_BY_GENDER = 'FETCH_OBJECT_BY_GENDER';
export const FETCH_OBJECT_BY_TYPE = 'FETCH_OBJECT_BY_TYPE';

export const SAVE_SEARCH_RESULT = 'SAVE_SEARCH_RESULT';
export const GET_FILE_VALUE = 'GET_FILE_VALUE';

//* * ----------- GLOBAL ACTION CREATORS ------------ **/
export const updateUpdateField = (identifier, newValue) => ({
  type: UPDATE_UPDATE_FIELD,
  identifier: identifier,
  value: newValue,
});

export const toggleFilter = () => ({
  type: TOGGLE_FILTER,
});

export const selectMedia = (category) => ({
  type: SELECT_MEDIA,
  media: category,
});

export const updateInputSearch = (newValue) => ({
  type: UPDATE_INPUT_SEARCH,
  value: newValue,
});

export const updateSelect = (identifier, newValue) => ({
  type: UPDATE_SELECT,
  identifier: identifier,
  value: newValue,
});

//* * ----------- ADD CONTENT ACTION CREATORS ------------- **/
/**
 * Create a new user.
 */
export const addUser = () => ({
  type: ADD_USER,
});

export const addObject = () => ({
  type: ADD_OBJECT,
});

export const getFileValue = (file) => ({
  type: GET_FILE_VALUE,
  file: file,
});

//* * ----------- SEARCH OBJECT ACTION CREATORS ------------- **/
export const fetchObjectByKeyword = () => ({
  type: FETCH_OBJECT_BY_KEYWORD,
});

export const fetchObjectByGender = () => ({
  type: FETCH_OBJECT_BY_GENDER,
});

export const fetchObjectByType = () => ({
  type: FETCH_OBJECT_BY_TYPE,
});

export const saveSearchResult = (result) => ({
  type: SAVE_SEARCH_RESULT,
  result: result,
});
