// == Import npm
import React from 'react';
import {
  Tab, Tabs, TabList, TabPanel,
} from 'react-tabs';

import FieldSelect from 'src/components/FieldSelect';

import './filters.scss';

// == Composant
const Filters = ({
  genders,
  types,
  selectMedia,
  selectedType,
  selectedGenders,
  manageSelect,

}) => { 

  const bookTypes = types.filter((type) => type.media.includes('book'));
  const movieTypes = types.filter((type) => type.media.includes('movie'));
  const musicTypes = types.filter((type) => type.media.includes('music'));
  const bookGenders = genders.filter((gender) => gender.media.includes('book'));
  const movieGenders = genders.filter((gender) => gender.media.includes('movie'));
  const musicGenders = genders.filter((gender) => gender.media.includes('music'));

  const manageClick = (category) => {
    selectMedia(category);
  };
  return (
    <section className="filters-container">
      <div className="criterias-container">
        <Tabs>
          <TabList className="tabs-list">
            <Tab
              selected
              className="tab"
              onClick={() => {
                manageClick('book');
              }}
            >Livre
              </Tab>
            <Tab
              className="tab"
              onClick={() => {
                manageClick('movie');
              }}
            >Cinéma
              </Tab>
            <Tab
              className="tab"
              onClick={() => {
                manageClick('music');
              }}
            >Musique
              </Tab>
          </TabList>


          <TabPanel>
            <section className="filters">
              <FieldSelect
                label="Type"
                identifier="type"
                placeholder="Selectionnez un type"
                value={selectedType}
                array={bookTypes}
                changeField={(identifier, value) => {
                  manageSelect(identifier, value);
                }}
              />
              <FieldSelect
                label="Genres"
                identifier="gender"
                placeholder="Selectionnez un genre"
                value={selectedGenders}
                array={bookGenders}
                changeField={(identifier, value) => {
                  manageSelect(identifier, value);
                }}
              />
            </section>
          </TabPanel>
          <TabPanel>
            <section className="filters">
              <FieldSelect
                label="Type"
                identifier="type"
                placeholder="Selectionnez un type"
                value={selectedType}
                array={movieTypes}
                changeField={(identifier, value) => {
                  manageSelect(identifier, value);
                }}
              />
              <FieldSelect
                label="Genres"
                identifier="gender"
                placeholder="Selectionnez un genre"
                value={selectedGenders}
                array={movieGenders}
                changeField={(identifier, value) => {
                  manageSelect(identifier, value);
                }}
              />
            </section>
          </TabPanel>
          <TabPanel>
            <section className="filters">
              <FieldSelect
                label="Type"
                identifier="type"
                placeholder="Selectionnez un type"
                value={selectedType}
                array={musicTypes}
                changeField={(identifier, value) => {
                  manageSelect(identifier, value);
                }}
              />
              <FieldSelect
                label="Genres"
                identifier="gender"
                placeholder="Selectionnez un genre"
                value={selectedGenders}
                array={musicGenders}
                changeField={(identifier, value) => {
                  manageSelect(identifier, value);
                }}
              />
            </section>
          </TabPanel>
        </Tabs>
        <button
          type="submit"
          className="submit-btn"
        >Valider
        </button>
      </div>
    </section>
  );
};

// == Export
export default Filters;
