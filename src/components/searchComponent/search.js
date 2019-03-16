import React, { useState } from "react";
import useDropdown from "../customHooks/customDropDownHook";
import { ANIMALS } from "petfinder-client";

const Search = () => {
  const [searchValue, setSearchValue] = useState("hi");
  const [animal, AnimalDropdown] = useDropdown("animal", "cat", ANIMALS);
  return (
    <div>
      <input type="search" onChange={e => setSearchValue(e.target.value)} value={searchValue} />
      <AnimalDropdown/>
    </div>
  );
};

export default Search;
