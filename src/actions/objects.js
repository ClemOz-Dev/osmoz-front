// Export.
export const FETCH_TEN_BOOKS = 'FETCH_BOOKS';
export const FETCH_TEN_MUSICS = 'FETCH_MUSICS';
export const FETCH_TEN_MOVIES = 'FETCH_MOVIES';

export const FETCH_CUSTOM_BOOKS = 'FETCH_CUSTOM_BOOKS';
export const FETCH_CUSTOM_MOVIES = 'FETCH_CUSTOM_MOVIES';
export const FETCH_CUSTOM_MUSICS = 'FETCH_CUSTOM_MUSICS';

export const SAVE_BOOKS = 'SAVE_BOOKS';
export const SAVE_MUSICS = 'SAVE_MUSICS';
export const SAVE_MOVIES = 'SAVE_MOVIES';

export const FETCH_TYPES = 'FETCH_TYPES';
export const FETCH_GENDERS = 'FETCH_GENDERS';

export const SAVE_GENDERS = 'SAVE_GENDERS';
export const SAVE_TYPES = 'SAVE_TYPES';

//* * --------------- BOOKS ACTION CREATORS ----------------------- * */
export const fetchTenBooks = () => ({
  type: FETCH_TEN_BOOKS,
});

export const saveBooks = (books) => ({
  type: SAVE_BOOKS,
  books: books,
});

export const fetchCustomBooks = () => ({
  type: FETCH_CUSTOM_BOOKS,
});

//* * --------------- MOVIES ACTION CREATORS ----------------------- * */
export const fetchTenMovies = () => ({
  type: FETCH_TEN_MOVIES,
});

export const saveMovies = (movies) => ({
  type: SAVE_MOVIES,
  movies: movies,
});

export const fetchCustomMovies = () => ({
  type: FETCH_CUSTOM_MOVIES,
});

//* * --------------- MUSICS ACTION CREATORS ----------------------- * */
export const fetchTenMusics = () => ({
  type: FETCH_TEN_MUSICS,
});

export const saveMusics = (musics) => ({
  type: SAVE_MUSICS,
  musics: musics,
});

export const fetchCustomMusics = () => ({
  type: FETCH_CUSTOM_MUSICS,
});

//* * ------------------- GENDERS / TYPES CREATORS ----------------- * */
export const fetchTypes = () => ({
  type: FETCH_TYPES,
});

export const fetchGenders = () => ({
  type: FETCH_GENDERS,
});

export const saveGenders = (genders) => ({
  type: SAVE_GENDERS,
  genders: genders,
});

export const saveTypes = (types) => ({
  type: SAVE_TYPES,
  types: types,
});
