import { connect } from 'react-redux';

import Message from 'src/components/Chat/Message';
import { updateMessageField } from 'src/actions/messages';

const mapStateToProps = (state, ownProps) => {
   // console.log(ownProps);
  return {
    isOwn: ownProps.from == state.auth.id,
  };
};

const mapDispatchToProps = (dispatch) => ({
  /* todo */
});

export default connect(mapStateToProps, mapDispatchToProps)(Message);
