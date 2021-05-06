import { connect } from 'react-redux';
import { fetchOneUser } from 'src/actions/users';
// on importe le composant de présentation
import Home from 'src/components/Home';

// === mapStateToProps
// si on a besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  // nom de la prop à remplir: élément à récupérer dans le state
  books: state.objects.books,
  movies: state.objects.movies,
  musics: state.objects.musics,
});

// === mapDispatchToProps
// si on a besoin de dispatcher des actions vers le store (mettre à jour le state)
const mapDispatchToProps = (dispatch) => ({
  loadThisUser: (id) => {
    // console.log(id);
    const action = fetchOneUser(id);
    dispatch(action);
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(Home);
