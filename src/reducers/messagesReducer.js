// == Import Actions.
import { UPDATE_MESSAGE_FIELD, SAVE_CONVERSATIONS, SELECT_INTERLOCUTOR, CLEAR_STATE } from 'src/actions/messages';

// Informations about Messages.
const initialState = {
  conversations: [],
  newMessageContent: '',
  recipient: '',
};

// All conditions for Messages Reducer.
function messagesReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_MESSAGE_FIELD:
      return {
        ...state,
        newMessageContent: action.value,
      };

    case SELECT_INTERLOCUTOR:
      return {
        ...state,
        recipient: action.id
      };

    case SAVE_CONVERSATIONS:
      // console.log(...action.conversations);
      return {
        ...state,
        conversations: [...action.conversations]
      };

    case CLEAR_STATE:
      return {
        ...state,
        newMessageContent: '',       
      }

    default:
      return state;
  }
}

// Export Reducer.
export default messagesReducer;
