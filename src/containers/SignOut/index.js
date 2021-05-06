import { connect } from 'react-redux';
import SignOut from 'src/components/SignOut';

import { logOut } from 'src/actions/auth';

// === mapStateToProps
// si on a besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  isConnected: state.auth.isConnected,
});

// === mapDispatchToProps
// si on a besoin de dispatcher des actions vers le store (mettre à jour le state)
const mapDispatchToProps = (dispatch) => ({
  disconnect: () => {
    const action = logOut();
    dispatch(action);
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(SignOut);
