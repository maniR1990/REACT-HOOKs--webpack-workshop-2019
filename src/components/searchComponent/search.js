import React, { useState, useEffect, useContext } from "react";
import useDropdown from "../customHooks/customDropDownHook";
import ThemeContext from './../appContext/themeContext';
import pf, { ANIMALS } from "petfinder-client";
import Details from '../details/details'

const petfinder = pf({
    key: process.env.API_KEY,
    secret: process.env.API_SECRET
  });

const Search = () => {
  
  const [theme, setTheme] = useContext(ThemeContext);
  const [searchValue, setSearchValue] = useState("Yigo, GU");
  const [breeds, updateBreeds] = useState([]);
  const [animal, AnimalDropdown] = useDropdown("animal", "cat", ANIMALS);
  const [breed, BreadDropdown, setBreed] = useDropdown("Breed", "", breeds);

  const [pets, setPets] = useState([]);

  async function requestPets() {
    const res = await petfinder.pet.find({
    searchValue,
      breed,
      animal,
      output: "full"
    });
    setPets(
        Array.isArray(res.petfinder.pets.pet)
          ? res.petfinder.pets.pet
          : [res.petfinder.pets.pet]
      );
}
 
  useEffect(()=>{
    setBreed('');
    updateBreeds([]);
    if(animal) {
        petfinder.breed.list({animal}).then( res => {
            updateBreeds(res.petfinder.breeds.breed);
          }, console.error)
    }
     
  },[animal]);

  return (
    <form
    onSubmit={e => {
      e.preventDefault();
       requestPets();
    }}>

    <div>
      <input type="search" onChange={e => setSearchValue(e.target.value)} value={searchValue} />
      <AnimalDropdown/>
      <BreadDropdown/>
      {theme}
      <button style={{
        backgroundColor : theme
      }}>Submit</button>
      <div>
        <p>update context from hooks</p>
        <select 
        onBlur = {(e) => setTheme(e.target.value)} 
        onChange = {(e) => setTheme(e.target.value)} 
        >
        <option value="peru">Peru</option>
    <option value="darkblue">Dark Blue</option>
    <option value="chartreuse">Chartreuse</option>
    <option value="mediumorchid">Medium Orchid</option>
        </select>
      </div>
      <Details pets = {pets}>
      </Details>

    </div>
    </form>
  );
};

export default Search;
