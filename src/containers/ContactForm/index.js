/* eslint-disable no-console */
import { connect } from 'react-redux';
import ContactForm from 'src/components/ContactForm';
import { updateContactField, submitContact } from 'src/actions/users';

// === mapStateToProps
// si on a besoin de lire des informations dans le state
const mapStateToProps = (state) => {
  console.log(state.auth.isConnected);
  return {
    isConnected: state.auth.isConnected,
    currentUsersEmail: state.auth.email,
    name: state.users.contactName,
    email: state.users.contactEmail,
    textarea: state.users.contactTextarea,
  };
};

// === mapDispatchToProps
// si on a besoin de dispatcher des actions vers le store (mettre à jour le state)
const mapDispatchToProps = (dispatch) => ({

  updateContactField: (identifier, newValue) => {
    const action = updateContactField(identifier, newValue);
    dispatch(action);
  },
  submitContact: () => {
    // console.log('clic');
    const action = submitContact();
    dispatch(action);
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
