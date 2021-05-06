// == Import dependencies: Yarn.
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

// == Import : Local.
// Middlewares.
import objectsMiddleware from 'src/middlewares/objectsMiddleware';
import authMiddleware from 'src/middlewares/authMiddleware';
import usersMiddleware from 'src/middlewares/usersMiddleware';
import messagesMiddleware from 'src/middlewares/messagesMiddleware';
import updateMiddleware from 'src/middlewares/updateMiddleware';

import reducer from 'src/reducers';

// Combining DevTools
const enhancers = composeWithDevTools(
  applyMiddleware(
    objectsMiddleware,
    usersMiddleware,
    authMiddleware,
    updateMiddleware,
    messagesMiddleware,
  ),
);

const store = createStore(
  // Reducer
  reducer,
  // Enhancer
  enhancers,
);

export default store;
