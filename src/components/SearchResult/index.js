// == Import npm
import React from 'react';

// == Import
import SearchBar from 'src/containers/SearchBar';
import CardItem from 'src/components/CardItem';
import './searchresult.scss';

// == Composant
const SearchResult = ({ searchResult, loadThisUser }) => {

  const handleClick = (id) => {
    loadThisUser(id);
  };
  return (
    <div className="search-result">
      <SearchBar />
      <h2 className="label">Résultats de votre recherche</h2>

      <div className="list">
        {searchResult.map((item) => {
          return (
            <CardItem
              key={item.id}
              name={item.name}
              author={item.author}
              author={item.artist}
              picture={item.picture}
              state={item.state}
              status={item.status}
              genders={item.gender}
              type={item.type.name}
              user={item.user.nickname}
              userId={item.user.id}
              manageClick={handleClick}
            />
          )
        })}
      </div>

    </div>
  )
};
// == Export
export default SearchResult;
