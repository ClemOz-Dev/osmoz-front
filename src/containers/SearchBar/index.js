import { connect } from 'react-redux';
import SearchBar from 'src/components/SearchBar';

import {
  toggleFilter,
  selectMedia,
  fetchObjectByKeyword,
  updateUpdateField,
  updateSelect,
} from 'src/actions/update';

// === mapStateToProps
const mapStateToProps = (state) => ({
  genders: state.objects.genders,
  types: state.objects.types,
  status: state.objects.status,
  states: state.objects.states,
  toggle: state.update.toggle,
  keywords: state.update.keywords,
  selectedType: state.update.selectedType,
  selectedGenders: state.update.selectedGenders,
});

// === mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
  toggler: () => {
    dispatch(toggleFilter());
  },
  selectMedia: (category) => {
    dispatch(selectMedia(category));
  },
  manageSubmit: () => {
    dispatch(fetchObjectByKeyword());
  },

  updateSelect: (identifier, value) => {
    dispatch(updateSelect(identifier, value));
  },
  updateInput: (identifier, value) => {
    dispatch(updateUpdateField(identifier, value));
  },

});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
