import React from 'react';

import Filters from 'src/components/Filters';
import './searchbar.scss';

class SearchBar extends React.Component {
  constructor() {
    super();
    this.state = {
      toggle: false,
    };
  }

  render() {
    return (
      <section className="search-container">
        <div className="search-field">
          <input className="search-input" placeholder="Votre recherche" />
        </div>
        <div className="button-filters">
          <button
            type="button"
            onClick={() => {
              this.setState({ toggle: !this.state.toggle });
            }}
            className="filters-button"
          >Filtres
          </button>
        </div>

        { this.state.toggle ? <Filters /> : null}
      </section>
    );
  }
}

export default SearchBar;
