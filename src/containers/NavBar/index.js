import { connect } from 'react-redux';
import NavBar from 'src/components/NavBar';

import { fetchOneUser } from 'src/actions/users';

// === mapStateToProps
// si on a besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  isConnected: state.auth.isConnected,
  id: state.auth.id,
});

// === mapDispatchToProps
// si on a besoin de dispatcher des actions vers le store (mettre à jour le state)
const mapDispatchToProps = (dispatch) => ({
  manageClick: (id) => {
    //  console.log('container',id);
    const action = fetchOneUser(id);
    dispatch(action);
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
