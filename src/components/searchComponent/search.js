import React, { useState, useEffect } from "react";
import useDropdown from "../customHooks/customDropDownHook";
import pf, { ANIMALS } from "petfinder-client";

const petfinder = pf({
    key: process.env.API_KEY,
    secret: process.env.API_SECRET
  });

const Search = () => {
  const [searchValue, setSearchValue] = useState("hi");
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
    }}
  >
    <div>
      <input type="search" onChange={e => setSearchValue(e.target.value)} value={searchValue} />
      <AnimalDropdown/>
      <BreadDropdown/>
      <button>Submit</button>
    </div>
    </form>
  );
};

export default Search;
