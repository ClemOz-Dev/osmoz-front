// == Import Actions.
import {
  UPDATE_CONTACT_FIELD,
  SAVE_ONE_USER,
  SAVE_ALL_USERS,
}
  from 'src/actions/users';

// Informations about Users.
const initialState = {
  allUsers: [],
  // Contact-form data.
  contactName: '',
  contactEmail: 'visiteur@visiteur.com',
  contactTextarea: '',
  // Users data.
  userId: '',
  userNickname: '',
  userPicture: '',
  userZipcode: '',
  userRole: [],
  userBooks: [],
  userMusics: [],
  userMovies: [],
};

// All conditions for Users Reducer.
function usersReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_CONTACT_FIELD:
      if (action.identifier === 'email') {
        return {
          ...state,
          contactEmail: action.value,
        };
      }
      if (action.identifier === 'name') {
        return {
          ...state,
          contactName: action.value,
        };
      }
      if (action.identifier === 'textarea') {
        return {
          ...state,
          contactTextarea: action.value,
        };
      }
      return {
        ...state,
        password: action.value,
      };

    case SAVE_ONE_USER:
      // console.log(action);
      return {
        ...state,
        userBooks: action.data.books,
        userMusics: action.data.music,
        userMovies: action.data.movies,
        userNickname: action.data.nickname,
        userZipcode: action.data.zipcode,
        userPicture: action.data.picture,
        userRole: action.data.roles,
        userId: action.data.id,
      };

    case SAVE_ALL_USERS:
      return {
        ...state,
        allUsers: [...action.users],
      };

    default:
      return state;
  }
}

// Export Reducer.
export default usersReducer;
