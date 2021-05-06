import { connect } from 'react-redux';
import UserProfile from 'src/components/UserProfile';
import { fetchOneUser } from 'src/actions/users';
import { updateSettingsField, toggleEditor, toggleChatbox, updateCurrentUser } from 'src/actions/auth';
import { selectInterlocutor, updateMessageField, sendMessage } from 'src/actions/messages';

const mapStateToProps = (state) => {
  return {
    isOwn: state.auth.id === state.users.userId,
    nickname: state.users.userNickname,
    books: state.users.userBooks,
    movies: state.users.userMovies,
    musics: state.users.userMusics,
    zipcode: state.users.userZipcode,
    picture: state.users.userPicture,
    role: state.users.userRole[0],
    id: state.users.userId,
    currentNickname: state.auth.nickname,
    currentZipcode: state.auth.zipcode,
    isEditorToggle: state.auth.isEditorToggle,
    isChatboxToggle: state.auth.isChatboxToggle,
    messageContent: state.messages.newMessageContent,
    pseudo: state.auth.pseudo,
  }
};

const mapDispatchToProps = (dispatch) => ({
  loadThisUser: (id) => {
    // console.log(id);
    const action = fetchOneUser(id);
    dispatch(action);
  },
  updateSettingsField: (identifier, newValue) => {
    const action = updateSettingsField(identifier, newValue);
    dispatch(action);
  },
  updateMessageField: (newValue) => {
    const action = updateMessageField(newValue);
    dispatch(action);
  },
  saveUpdates: () => {
    console.log('a valider');
    dispatch(updateCurrentUser());
  },
  toggleEditor: () => {
    const action = toggleEditor();
    dispatch(action);
  },
  toggleChatbox: () => {
    const action = toggleChatbox();
    dispatch(action);
  },
  selectInterlocutor: (id) => {
    const action = selectInterlocutor(id);
    dispatch(action);
  },
  sendMessage: () => {
    const action = sendMessage();
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
