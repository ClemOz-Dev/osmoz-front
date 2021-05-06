import { connect } from 'react-redux';

import Chat from 'src/components/Chat';

const mapStateToProps = (state) => {
  const { allUsers } = state.users;
  const usersNickname = [];
  allUsers.map((user) => {
    usersNickname.push({ id: user.id, nickname: user.nickname, picture: user.picture });
  });
 
  return {
    conversations: state.messages.conversations,
    nickname: usersNickname,
  };
};

const mapDispatchToProps = (dispatch) => ({
  /* todo */
});

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
