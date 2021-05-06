import { connect } from 'react-redux';
import { fetchOneUser } from 'src/actions/users';
import SearchResult from 'src/components/SearchResult';

// === mapStateToProps
const mapStateToProps = (state) => ({
  searchResult: state.update.searchResult
});

// === mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
  loadThisUser: (id) => {
    // console.log(id);
    const action = fetchOneUser(id);
    dispatch(action);
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(SearchResult);
