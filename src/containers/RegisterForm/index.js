import { connect } from 'react-redux';

import RegisterForm from 'src/components/RegisterForm';

import { updateUpdateField, addUser } from 'src/actions/update';

// === mapStateToProps
// si on a besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  nickname: state.update.nickname,
  email: state.update.email,
  password: state.update.password,
  zipcode: state.update.zipcode,
});

const mapDispatchToProps = (dispatch) => ({

  updateUpdateField: (identifier, newValue) => {
    // console.log(identifier);
    const action = updateUpdateField(identifier, newValue);
    dispatch(action);
  },
  addUser: () => {
    const action = addUser();
    dispatch(action);
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm);
