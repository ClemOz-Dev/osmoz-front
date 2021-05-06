// == Import npm
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useHistory } from 'react-router-dom';
import FieldSelect from 'src/components/FieldSelect';

import Field from 'src/components/Field';
import {
  Tab,
  Tabs,
  TabList,
  TabPanel,
} from 'react-tabs';

// == Import
import './addobjects.scss';
import {
  faCloudUploadAlt,
} from '@fortawesome/free-solid-svg-icons';

// == Composant
const AddObjects = ({
  genders,
  image,
  types,
  name,
  author,
  states,
  status,
  selectMedia,
  selectedType,
  selectedGenders,
  selectedStatus,
  selectedState,
  manageSubmit,
  updateUpdateField,
  updateSelect,
}) => {

  const fd = new FormData();

  // const encodedData = window.btoa('Hello, world'); // encode a string
  // console.log(encodedData);
  // const decodedData = window.atob(encodedData); // decode the string
  // console.log(decodedData);

  const bookTypes = types.filter((type) => type.media.includes('book'));
  const movieTypes = types.filter((type) => type.media.includes('movie'));
  const musicTypes = types.filter((type) => type.media.includes('music'));
  const bookGenders = genders.filter((gender) => gender.media.includes('book'));
  const movieGenders = genders.filter((gender) => gender.media.includes('movie'));
  const musicGenders = genders.filter((gender) => gender.media.includes('music'));

  const manageClick = (category) => {
    selectMedia(category);
  };

  const handleFile = (event) => {
    event.preventDefault();
    fd.append(event.target.files[0]);
    console.log(fd);
  };

  const history = useHistory();

  return (
    <div className="addobjects-container">
      <h1 className="addobjects-title">Ajouter un objet</h1>
      <div className="form-container">
        <Tabs>
          <TabList className="add-tabslist">
            <Tab
              className="tab-item"
              onClick={() => {
                manageClick('book');
              }}
            >Livre
            </Tab>
            <Tab
              className="tab-item"
              onClick={() => {
                manageClick('movies');
              }}
            >Cinéma
            </Tab>
            <Tab
              className="tab-item"
              onClick={() => {
                manageClick('music');
              }}
            >Musique
            </Tab>
          </TabList>

          <TabPanel>
            <form>
              <div id="book" className="category category-book">

                <Field
                  className="input"
                  identifier="image"
                  placeholder="Choisissez une image"
                  label="Image"
                  value={image}
                  changeField={(identifier, newValue) => {
                    updateUpdateField(identifier, newValue);
                  }}
                />

                <Field
                  className="input"
                  identifier="name"
                  placeholder="Entrez un titre"
                  label="Titre du livre"
                  value={name}
                  changeField={(identifier, newValue) => {
                    updateUpdateField(identifier, newValue);
                  }}
                />
                <Field
                  className="input"
                  identifier="author"
                  placeholder="Indiquez l'auteur du livre"
                  label="Auteur du livre"
                  value={author}
                  changeField={(identifier, newValue) => {
                    updateUpdateField(identifier, newValue);
                  }}
                />
                <FieldSelect
                  label="Type"
                  identifier="type"
                  placeholder="Selectionnez un type"
                  value={selectedType}
                  array={bookTypes}
                  changeField={(identifier, value) => {
                    updateSelect(identifier, value);
                  }}
                />
                <FieldSelect
                  label="Genres"
                  identifier="gender"
                  placeholder="Selectionnez un genre"
                  value={selectedGenders}
                  array={bookGenders}
                  changeField={(identifier, value) => {
                    updateSelect(identifier, value);
                  }}
                />
                <FieldSelect
                  label="État"
                  identifier="state"
                  placeholder="Selectionnez un état"
                  value={selectedState}
                  array={states}
                  changeField={(identifier, value) => {
                    updateSelect(identifier, value);
                  }}
                />
                <FieldSelect
                  label="Status"
                  identifier="status"
                  placeholder="Selectionnez une disponibilité"
                  value={selectedStatus}
                  array={status}
                  changeField={(identifier, value) => {
                    updateSelect(identifier, value);
                  }}
                />
                <button
                  type="submit"
                  form="form-book"
                  value="submit"
                  className="add-submit"
                  onClick={(event) => {
                    event.preventDefault();
                    manageSubmit();
                    history.push('/');
                  }}
                >Valider
                </button>
              </div>
            </form>
          </TabPanel>
          <TabPanel>
            <form>
              <div id="cinema" className="category category-cinema">
                <div className="add-image">
                  <p className="image-label">Image:</p>
                  <label htmlFor="img" className="custom-upload"><FontAwesomeIcon icon={faCloudUploadAlt} /> Choisir une image</label>
                  <input type="file" id="img" name="img" accept="image/*" onChange={handleFile} />
                </div>
                <Field
                  className="input"
                  identifier="name"
                  placeholder="Entrez un titre"
                  label="Titre du film"
                  value={name}
                  changeField={(identifier, newValue) => {
                    updateUpdateField(identifier, newValue);
                  }}
                />
                <FieldSelect
                  label="Type"
                  identifier="type"
                  placeholder="Selectionnez un type"
                  value={selectedType}
                  array={movieTypes}
                  changeField={(identifier, value) => {
                    updateSelect(identifier, value);
                  }}
                />
                <FieldSelect
                  label="Genres"
                  identifier="gender"
                  placeholder="Selectionnez un genre"
                  value={selectedGenders}
                  array={movieGenders}
                  changeField={(identifier, value) => {
                    updateSelect(identifier, value);
                  }}
                />
                <FieldSelect
                  label="État"
                  identifier="state"
                  placeholder="Selectionnez un état"
                  value={selectedState}
                  array={states}
                  changeField={(identifier, value) => {
                    updateSelect(identifier, value);
                  }}
                />
                <FieldSelect
                  label="Status"
                  identifier="status"
                  placeholder="Selectionnez une disponibilité"
                  value={selectedStatus}
                  array={status}
                  changeField={(identifier, value) => {
                    updateSelect(identifier, value);
                  }}
                />
                <button
                  type="submit"
                  form="form-book"
                  value="submit"
                  className="add-submit"
                  onClick={(event) => {
                    event.preventDefault();
                    manageSubmit();
                    history.push('/');
                  }}
                >Valider
                </button>
              </div>
            </form>
          </TabPanel>
          <TabPanel>
            <form>
              <div id="music" className="category category-music">
                <div className="add-image">

                  <p className="image-label">Image:</p>
                  <label htmlFor="img" className="custom-upload"><FontAwesomeIcon icon={faCloudUploadAlt} /> Choisir une image</label>

                  <input type="file" id="img" name="img" accept="image/*" onChange={handleFile} />
                </div>
                <Field
                  className="input"
                  identifier="name"
                  placeholder="Entrez un titre"
                  label="Titre de l'album"
                  value={name}
                  changeField={(identifier, newValue) => {
                    updateUpdateField(identifier, newValue);
                  }}
                />
                <Field
                  className="input"
                  identifier="author"
                  placeholder="Indiquez l'artiste"
                  label="Artiste"
                  value={author}
                  changeField={(identifier, newValue) => {
                    updateUpdateField(identifier, newValue);
                  }}
                />
                <FieldSelect
                  label="Type"
                  identifier="type"
                  placeholder="Selectionnez un type"
                  value={selectedType}
                  array={musicTypes}
                  changeField={(identifier, value) => {
                    updateSelect(identifier, value);
                  }}
                />
                <FieldSelect
                  label="Genres"
                  identifier="gender"
                  placeholder="Selectionnez un genre"
                  value={selectedGenders}
                  array={musicGenders}
                  changeField={(identifier, value) => {
                    updateSelect(identifier, value);
                  }}
                />
                <FieldSelect
                  label="État"
                  identifier="state"
                  placeholder="Selectionnez un état"
                  value={selectedState}
                  array={states}
                  changeField={(identifier, value) => {
                    updateSelect(identifier, value);
                  }}
                />
                <FieldSelect
                  label="Status"
                  identifier="status"
                  placeholder="Selectionnez une disponibilité"
                  value={selectedStatus}
                  array={status}
                  changeField={(identifier, value) => {
                    updateSelect(identifier, value);
                  }}
                />
                <button
                  type="submit"
                  form="form-book"
                  value="submit"
                  className="add-submit"
                  onClick={(event) => {
                    event.preventDefault();
                    manageSubmit();
                    history.push('/');
                  }}
                >Valider
                </button>
              </div>
            </form>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

// == Export
export default AddObjects;
