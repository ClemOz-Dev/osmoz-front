import { connect } from 'react-redux';

import { updateMessageField, sendMessage } from 'src/actions/messages';

// on importe le composant de présentation
import Form from 'src/components/Chat/Form';

// === mapStateToProps
// si on a besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  // nom de la prop à remplir: élément à récupérer dans le state
  value: state.messages.newMessageContent,
});

// === mapDispatchToProps
// si on a besoin de dispatcher des actions vers le store (mettre à jour le state)
const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: fonction qui dispatch l'action
  setValue: (value) => {
    const action = updateMessageField(value);
    dispatch(action);
  },
  manageSubmit: () => {   
    const action = sendMessage();
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
