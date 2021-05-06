// == Import dependencies: Yarn.
import { combineReducers } from 'redux';

// == Import : Local.
// Reducers.
import objectsReducer from './objectsReducer';
import authReducer from './authReducer';
import usersReducer from './usersReducer';
import messagesReducer from './messagesReducer';
import updateReducer from './updateReducer';

const rootReducer = combineReducers({
  // Alias for each reducer.
  objects: objectsReducer,
  auth: authReducer,
  users: usersReducer,
  messages: messagesReducer,
  update: updateReducer,
});

// Export Reducer.
export default rootReducer;
