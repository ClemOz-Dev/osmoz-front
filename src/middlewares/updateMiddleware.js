import axios from 'axios';
import { API_URL } from 'src/utils';

// == Import : Local.
import {
  ADD_OBJECT,
  ADD_USER,
  FETCH_OBJECT_BY_KEYWORD, 
  saveSearchResult,
} from 'src/actions/update';
import { fetchTenBooks, fetchTenMovies, fetchTenMusics } from 'src/actions/objects';
import { clearState } from 'src/actions/messages';

// Middleware configuration.
const updateMiddleware = (store) => (next) => (action) => {
  const state = store.getState();
  const { token } = window.localStorage;
  const { media } = store.getState().update;

  switch (action.type) {
    case ADD_OBJECT:
      let author = '';
      if (media === 'music') {
        author = 'artist';
      } else { author = 'author' }
            
      axios.post(`${API_URL}/${media}/create`, {
        name: state.update.name,
        [author]: state.update.author,
        picture: state.update.picture,
        status: state.update.selectedStatus,
        state: state.update.selectedState,
        gender: [state.update.selectedGenders],
        type: state.update.selectedType,
        user: state.auth.id,
        support: 'CD',
      }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => {
          console.log('response: ', response);
          if (media === 'book') {
            store.dispatch(fetchTenBooks());
          }
          else if (media === 'musics') {
            store.dispatch(fetchTenMusics());
          }
          else {
            store.dispatch(fetchTenMovies());
          }
          store.dispatch(clearState());
        })
        .catch((error) => {
          console.log('error:', error.response.data);
        });
      next(action);
      break;

    case ADD_USER:
      axios.post(`${API_URL}/users/create`, {
        email: state.update.email,
        password: state.update.password,
        nickname: state.update.nickname,
        zipcode: parseInt(state.update.zipcode),
      })
        .then((response) => {
          console.log('response: ', response);
          /* todo redirect to ...? */
        })
        .catch((error) => {
          console.log('error:', error);
        });
      next(action);
      break;

    case FETCH_OBJECT_BY_KEYWORD:
      // console.log(action);     
      axios.post(`${API_URL}/gender/read/${media}/departement`, {
        keyword: state.update.keywords,
        idGender: state.update.selectedGenders,
        idType: state.update.selectedType,
        departement: parseInt(state.auth.departement),
      })
        .then((response) => {
          console.log('response: ', response);
          const result = response.data[0];
          const finalResult = [];
          if (result.media == 'book') {
            finalResult.push(result.books);
          } else if (result.media == 'music') {
            finalResult.push(result.music)
          } else if (result.media == 'movie') {
            finalResult.push(result.movies)
          }
          store.dispatch(saveSearchResult(finalResult[0]));
          store.dispatch(clearState());
        })
        .catch((error) => {
          console.log('error:', error.response.data);
        });
      next(action);
      break;

    default:
      next(action);
  }
};

// Export Middleware.
export default updateMiddleware;
