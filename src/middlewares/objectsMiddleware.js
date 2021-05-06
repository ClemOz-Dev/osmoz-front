/* eslint-disable no-console */
// == Import dependencies.
import axios from 'axios';
import { API_URL } from 'src/utils';

// == Import : Local.
import {
  FETCH_GENDERS,
  FETCH_TYPES,
  FETCH_TEN_BOOKS,
  FETCH_TEN_MOVIES,
  FETCH_TEN_MUSICS, 
  saveBooks,
  saveMovies,
  saveMusics,
  saveTypes,
  saveGenders,
} from 'src/actions/objects';

// Middleware configuration.
const objectsMiddleware = (store) => (next) => (action) => {
  // console.log('on a intercepté une action dans le middleware OBJECTS: ', action);
  const state = store.getState();

  switch (action.type) {
    case FETCH_TEN_BOOKS:
      // console.log('Il faut aller chercher les recettes');
      // axios.all([toto,tata,titi])
      axios.get(`${API_URL}/book/read`)
        .then((response) => {
          // console.log('response: ', response.data);
          store.dispatch(saveBooks(response.data));
        })
        .catch((error) => {
          console.log('error:', error);
        });

      next(action);
      break;
    case FETCH_TEN_MOVIES:
      // console.log('Il faut aller chercher les films');
      axios.get(`${API_URL}/movies/read`)
        .then((response) => {
          // console.log('response: ', response.data);
          store.dispatch(saveMovies(response.data));
        })
        .catch((error) => {
          console.log('error:', error);
        });

      next(action);
      break;

    case FETCH_TEN_MUSICS:
      // console.log('Il faut aller chercher les films');
      axios.get(`${API_URL}/music/read`)
        .then((response) => {
          // console.log('response: ', response.data);
          store.dispatch(saveMusics(response.data));
        })
        .catch((error) => {
          console.log('error:', error);
        });

      next(action);
      break;

      //* * ------------------- GENDER / TYPE REQUESTS ----------------- **/

    case FETCH_TYPES:
      // console.log('TYPES !');
      state.objects.isLoading = true;
      axios.get(`${API_URL}/type/read/`)
        .then((response) => {
          // console.log('response: ', response.data);
          store.dispatch(saveTypes(response.data));
        })
        .catch((error) => {
          console.log('error:', error);
        });
      next(action);
      break;

    case FETCH_GENDERS:
      axios.get(`${API_URL}/gender/read/`)
        .then((response) => {
          // console.log('response: ', response);
          store.dispatch(saveGenders(response.data));
        })
        .catch((error) => {
          console.log('error:', error);
        });
      next(action);
      break;

    default:
      next(action);
  }
};

// Export Middleware.
export default objectsMiddleware;
