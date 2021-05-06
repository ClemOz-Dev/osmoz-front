import { connect } from 'react-redux';

import ChatList from 'src/components/ChatList';

import { saveConversations, selectInterlocutor } from 'src/actions/messages';

const mapStateToProps = (state) => {
  const { allUsers } = state.users;
  const usersNickname = [];
  allUsers.map((user) => {
    usersNickname.push({ id: user.id, nickname: user.nickname, picture: user.picture });
  });  
  return {
    usersMails: state.auth.mails,   
    id: state.auth.id,
    nickname: usersNickname,
  };
};

const mapDispatchToProps = (dispatch) => ({  
  saveConversations: (conversations) => {    
    const action = saveConversations(conversations);
    dispatch(action);
  },

  selectInterlocutor: (id) => { 
    const action = selectInterlocutor(id);
    dispatch(action);
  },

});

export default connect(mapStateToProps, mapDispatchToProps)(ChatList);
