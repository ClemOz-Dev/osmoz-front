// == Import Actions.
import {
  UPDATE_UPDATE_FIELD,
  TOGGLE_FILTER,
  SELECT_MEDIA,
  UPDATE_INPUT_SEARCH,
  UPDATE_SELECT,
  SAVE_SEARCH_RESULT,
  GET_FILE_VALUE,
} from 'src/actions/update';

import { CLEAR_STATE } from 'src/actions/messages';

// Informations about Update.
const initialState = {
  toggle: false,
  // Content from searchBar.
  selectedCategory: '',
  keywords: '',
  media: 'book',
  selectedType: '',
  selectedGenders: '',
  selectedState: '',
  selectedStatus: '',
  selectedFile: {},
  // Product settings
  name: '',
  author: '',
  artist: '',
  picture: '',
  status: '',
  state: '',
  gender: [],
  type: '',
  // User settings.
  email: '',
  password: '',
  nickname: '',
  zipcode: '',
  // Array with searching results.
  searchResult: [],
};

// All conditions for Update Reducer.
function updateReducer(state = initialState, action) {
  switch (action.type) {
    case GET_FILE_VALUE:
      console.log(action.file)
      return {
        ...state,
        selectedFile: action.file,
      }

    case UPDATE_UPDATE_FIELD:
      if (action.identifier === 'email') {
        return {
          ...state,
          email: action.value,
        };
      } if (action.identifier === 'nickname') {
        return {
          ...state,
          nickname: action.value,
        };
      } if (action.identifier === 'zipcode') {
        return {
          ...state,
          zipcode: action.value,
        };
      }
      if (action.identifier === 'password') {
        return {
          ...state,
          password: action.value,
        };
      }
      if (action.identifier === 'name') {
        return {
          ...state,
          name: action.value,
        };
      } if (action.identifier === 'keywords') {
        return {
          ...state,
          keywords: action.value,
        };
      }
      if (action.identifier === 'author') {
        return {
          ...state,
          author: action.value,
        };
      }
      if (action.identifier === 'image') {
        return {
          ...state,
          picture: action.value,
        };
      }

    case UPDATE_INPUT_SEARCH:
      return {
        ...state,
        keywords: action.value,
      };

    case TOGGLE_FILTER:
      return {
        ...state,
        toggle: !state.toggle,
      };
    case SELECT_MEDIA:
      return {
        ...state,
        media: action.media,
      };

    case UPDATE_SELECT:
      if (action.identifier === 'type') {
        return {
          ...state,
          selectedCategory: action.identifier,
          selectedType: parseInt(action.value),
        };
      } if (action.identifier === 'gender') {
        return {
          ...state,
          selectedCategory: action.identifier,
          selectedGenders: parseInt(action.value),
        };
      } if (action.identifier === 'state') {
        return {
          ...state,
          selectedState: parseInt(action.value),
        };
      } if (action.identifier === 'status') {
        return {
          ...state,
          selectedStatus: action.value,
        };
      }

    case SAVE_SEARCH_RESULT:
      return {
        ...state,
        searchResult: action.result,
      };


    case CLEAR_STATE:
      return {
        ...state,
        keywords: '',
        name: '',
        author: '',
        picture: '',
        selectedGenders: '',
        selectedType: '',
        selectedState: '',
        selectedStatus: '',
      }

    default:
      return state;
  }
}

// Export Reducer.
export default updateReducer;
