// == Import Actions.
import {
  CONNECT_USER,
  UPDATE_SETTINGS_FIELD,
  LOG_OUT,
  SAVE_CURRENT_USERS_DATA,
  TOGGLE_EDITOR,
  TOGGLE_CHATBOX,
} from 'src/actions/auth';

import { SAVE_MESSAGES } from 'src/actions/messages';

// Informations about Authentification.
const initialState = {
  id: null,
  nickname: '',
  pseudo: '',
  email: '',
  picture: '',
  role: '',
  password: '',
  zipcode: '',
  departement: 13,
  mails: [],
  isConnected: false,
  isEditorToggle: false,
  isChatboxToggle: false,
};

// All conditions for Authentification Reducer.
function authReducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_EDITOR:
      // console.log(action);
      return {
        ...state,
        isEditorToggle: !state.isEditorToggle,
      };
    case TOGGLE_CHATBOX:
      console.log(action);
      return {
        ...state,
        isChatboxToggle: !state.isChatboxToggle,
      };
    case CONNECT_USER:
      // console.log('action', action);
      return {
        ...state,
        password: '',
        nickname: action.nickname,
        email: action.email,
        isConnected: true,
      };

    case SAVE_CURRENT_USERS_DATA:
      // console.log(action.data[0]);
      return {
        ...state,
        nickname: action.data[0].nickname,
        pseudo: action.data[0].nickname,
        id: action.data[0].id,
        zipcode: action.data[0].zipcode,
        role: action.data[0].roles[0],
        departement: action.data[0].departement,
        mails: [...action.data[0].mail],
      };

    case LOG_OUT:
      return {
        ...state,
        isConnected: false,
        id: '',
        email: '',
        nickname: '',
        role: '',
        mails: [],
      };

    case SAVE_MESSAGES:
      console.log(action.mails);
      return {
        ...state,
        mails: [...action.mails]
      };

    case UPDATE_SETTINGS_FIELD:
      // console.log(action.identifier)
      if (action.identifier === 'email') {
        return {
          ...state,
          email: action.value,
        };
      } if (action.identifier === 'zipcode') {
        return {
          ...state,
          zipcode: action.value,
        };
      } if (action.identifier === 'nickname') {
        return {
          nickname: '',
          ...state,
          nickname: action.value,
          pseudo: action.value,
        };
      }
      return {
        ...state,
        password: action.value,
      };

    default:
      return state;
  }
}

// Export Reducer.
export default authReducer;
