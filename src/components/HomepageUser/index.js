// == Import npm
import React, { useEffect } from 'react';
import Carousel from 'react-elastic-carousel';
// == Import
import CardItem from 'src/components/CardItem';
import SearchBar from 'src/containers/SearchBar';
import './homepageuser.scss';

const HomepageUser = ({
  books,
  movies,
  musics,
  nickname,
  email,
  loadThisUser,
  loadCurrentUsersData,
  loadBooks,
  loadMovies,
  loadMusics,
}) => {

  useEffect(() => {
    loadCurrentUsersData(email);
    loadBooks();
    loadMovies();
    loadMusics();
  }, []);
  const handleClick = (id) => {
    loadThisUser(id);
  };

  return (
    <div className="home">
      <div className="heading">
        <SearchBar />
        <div className="welcome-container">
          <h2 className="welcome">Bienvenue sur Osmoz, <span className="nickname">{nickname}</span>.</h2>
          <p className="sentence">Voici les dernières annonces proches de chez vous.</p>
        </div>
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
    </div>
  );
};
export default HomepageUser;
