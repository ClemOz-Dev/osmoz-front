// == Import npm
import React from 'react';
import Carousel from 'react-elastic-carousel';

// == Import
import CardItem from 'src/components/CardItem';
import SearchBar from 'src/containers/SearchBar';
import './home.scss';

// == Composant
/**
 * Default Home Page
 * @param {books} ArrayOfObjects
 * @param {musics} ArrayOfObjects
 * @param {movies} ArrayOfObjects
 */
const Home = ({ books, movies, musics, loadThisUser, }) => {
  const handleClick = (id) => {
    loadThisUser(id);
  };
  return (
    <div className="home">
      <SearchBar />
      <h2 className="label">Section Livres</h2>

      <Carousel enableAutoPlay autoPlaySpeed={2500} >
        {books.map((book) => (
          <CardItem
            key={book.id}
            name={book.name}
            author={book.author}
            picture={book.picture}
            state={book.state}
            status={book.status}
            genders={book.gender}
            type={book.type.name}
            user={book.user.nickname}
            userId={book.user.id}
            manageClick={handleClick}
          />
        ))}
      </Carousel>

      <h2 className="label">Section Cinéma</h2>
      <Carousel enableAutoPlay autoPlaySpeed={2500} >
        {movies.map((movie) => (
          <CardItem
            key={movie.id}
            name={movie.name}
            author={movie.author}
            picture={movie.picture}
            state={movie.state}
            status={movie.status}
            type={movie.type.name}
            user={movie.user.nickname}
            userId={movie.user.id}
            manageClick={handleClick}
            genders={movie.gender}
          />
        ))}
      </Carousel>

      <h2 className="label">Section Musique</h2>
      <Carousel enableAutoPlay autoPlaySpeed={2500} >
        {musics.map((music) => (
          <CardItem
            key={music.id}
            author={music.artist}
            name={music.name}
            state={music.state}
            status={music.status}
            picture={music.picture}
            type={music.type.name}
            user={music.user.nickname}
            userId={music.user.id}
            manageClick={handleClick}
            genders={music.gender}
          />
        ))}
      </Carousel>
    </div>
  )
};
// == Export
export default Home;
