import { connect } from 'react-redux';

import LoginForm from 'src/components/LoginForm';

import { updateSettingsField, submitLogin } from 'src/actions/auth';

// === mapStateToProps
// si on a besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  // nom de la prop à remplir: élément à récupérer dans le state

  email: state.auth.email,
  password: state.auth.password,
});

// === mapDispatchToProps
// si on a besoin de dispatcher des actions vers le store (mettre à jour le state)
const mapDispatchToProps = (dispatch) => ({

  updateSettingsField: (identifier, newValue) => {
    // console.log(identifier);
    const action = updateSettingsField(identifier, newValue);
    dispatch(action);
  },
  submitLogin: () => {
    const action = submitLogin();
    dispatch(action);
  },

});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
