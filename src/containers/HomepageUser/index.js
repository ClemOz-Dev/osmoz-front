import { connect } from 'react-redux';
import { fetchOneUser } from 'src/actions/users';
import { fetchCurrentUsersData } from 'src/actions/auth';
import { fetchTenBooks, fetchTenMovies, fetchTenMusics } from 'src/actions/objects';
import HomepageUser from 'src/components/HomepageUser';

const mapStateToProps = (state) => ({

  books: state.objects.books,
  movies: state.objects.movies,
  musics: state.objects.musics,
  nickname: state.auth.nickname,
  email: state.auth.mail,
});

const mapDispatchToProps = (dispatch) => ({
  loadThisUser: (id) => {
    const action = fetchOneUser(id);
    dispatch(action);
  },
  loadBooks: () => dispatch(fetchTenBooks()),
  loadMusics: () => dispatch(fetchTenMusics()),
  loadMovies: () => dispatch(fetchTenMovies()),
  loadCurrentUsersData: (email) => {
    const action = fetchCurrentUsersData(email);
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(HomepageUser);
