// == Import Actions.
import {
  SAVE_TYPES,
  SAVE_GENDERS,
  SAVE_BOOKS,
  SAVE_MUSICS,
  SAVE_MOVIES,
} from 'src/actions/objects';

// Informations about Objects.
const initialState = {
  // List the first 30 objects.
  books: [],
  musics: [],
  movies: [],
  genders: [],
  types: [],
  states: [
    { id: 1, name: 'Comme neuf' },
    { id: 2, name: 'Bon' },
    { id: 3, name: 'Moyen' },
  ],
  status: [
    { id: 'réservé', name: 'Dispo échange' },
    { id: 'dispo', name: 'Dispo prêt' },
    { id: 'pas dispo', name: 'Indisponible' },
  ],
  // Is Loading ?
  isLoading: true,
};

// All conditions for Objects Reducer.
function objectsReducer(state = initialState, action) {
  // console.log('action interceptée dans le middleware');
  switch (action.type) {
    case SAVE_BOOKS:
      // console.log(action);
      return {
        ...state,
        books: action.books,
        isLoading: false,
      };

    case SAVE_MUSICS:
      // console.log(action);
      return {
        ...state,
        musics: action.musics,
        isLoading: false,
      };

    case SAVE_MOVIES:
      // console.log(action);
      return {
        ...state,
        movies: action.movies,
        isLoading: false,
      };

    case SAVE_TYPES:
      return {
        ...state,
        types: action.types,
        isLoading: false,
      };

    case SAVE_GENDERS:
      return {
        ...state,
        genders: action.genders,
      };

    default:
      return state;
  }
}

// Export Reducer.
export default objectsReducer;
