import { connect } from 'react-redux';
import AddObjects from 'src/components/AddObjects';

import {
  selectMedia, updateUpdateField, addObject, updateSelect, getFileValue
} from 'src/actions/update';

// === mapStateToProps
const mapStateToProps = (state) => ({
  genders: state.objects.genders,
  types: state.objects.types,
  status: state.objects.status,
  states: state.objects.states,
  toggle: state.update.toggle,
  image: state.update.picture,
  name: state.update.name,
  author: state.update.author,
  selectedType: state.update.selectedType,
  selectedGenders: state.update.selectedGenders,
  selectedStatus: state.update.selectedStatus,
  selectedState: state.update.selectedState,
});

// === mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
  selectMedia: (category) => {
    dispatch(selectMedia(category));
  },
  updateUpdateField: (identifier, newValue) => {
    const action = updateUpdateField(identifier, newValue);
    dispatch(action);
  },
  updateSelect: (identifier, value) => {
    dispatch(updateSelect(identifier, value));
  },
  manageSubmit: () => {
    dispatch(addObject());
  },
  getFileValue: (file) => {
    dispatch(getFileValue(file));
  }
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(AddObjects);
