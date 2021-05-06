import { connect } from 'react-redux';

import {
  fetchTenBooks, fetchTenMovies, fetchTenMusics, fetchTypes, fetchGenders,
} from 'src/actions/objects';
import { fetchAllUsers } from 'src/actions/users';
import { connectUser } from 'src/actions/auth';

// import component of presentation
import App from 'src/components/App';

// === mapStateToProps
// Read information from API
const mapStateToProps = (state) => ({
  isLoading: state.objects.isLoading,
  messages: state.messages.conversations,
  isConnected: state.auth.isConnected,
});

// === mapDispatchToProps
// Dispatch action to store (= updating state)
const mapDispatchToProps = (dispatch) => ({
  // load items from api
  loadBooks: () => dispatch(fetchTenBooks()),
  loadMusics: () => dispatch(fetchTenMusics()),
  loadMovies: () => dispatch(fetchTenMovies()),
  loadGenders: () => dispatch(fetchGenders()),
  loadTypes: () => dispatch(fetchTypes()),
  loadUsers: () => dispatch(fetchAllUsers()),

  connectUser: (token, nickname, email, id) => dispatch(connectUser(token, nickname, email, id)),
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(App);
