import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useHistory } from 'react-router-dom';

import Filters from 'src/components/Filters';
import './searchbar.scss';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchBar = ({
  currentMedia,
  keywords,
  toggler,
  toggle,
  genders,
  types,
  manageSubmit,
  selectMedia,
  states,
  status,
  selectedType,
  selectedGenders,
  updateSelect,
  updateInput,  
}) => {
  const history = useHistory();

  const handleToggle = () => {
    toggler();
  }



  return (
    <form
      className="search-container"
      onSubmit={(event) => {
        event.preventDefault();
        manageSubmit();
        history.push('/resultat-recherche');
      }}
    >

      <div className="search-field">
        <input
          className="search-input"
          type="text"
          placeholder="Votre recherche"
          value={keywords}
          onChange={(event) => {
            updateInput("keywords", event.target.value)
          }}
        />
        <button className="search-button" type="submit" >
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>


      <div className="button-filters">
        <button
          type="button"
          onClick={handleToggle}
          className="filters-button"
        >Filtres
          </button>
      </div>
      {toggle &&
        <Filters
          genders={genders}
          selectMedia={selectMedia}
          types={types}
          currentMedia={currentMedia}
          states={states}
          status={status}
          selectedGenders={selectedGenders}
          selectedType={selectedType}
          manageSelect={(identifier, newValue) => {
            updateSelect(identifier, newValue);
          }}         
        />
      }
    </form>

  );

}

export default SearchBar;
