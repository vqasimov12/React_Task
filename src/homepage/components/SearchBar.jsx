import React from "react";
import { useStore } from "zustand";
import {themeStore} from "../../common/Store"
const SearchBar = ({ searcTerm, setSearchTerm }) => {
  const{theme,toggle}=useStore(themeStore)
  return (
    <>
      <div className="flex items-center justify-center gap-5 py-5 ">
        <button onClick={toggle} className="bg-[red] w-[100px] text-white py-2">{theme}</button>
        <h3>Search</h3>
        <input
          type="text"
          value={searcTerm}
          className="border border-zinc-400 p-2"
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
          placeholder="Search for items"
        />
      </div>
    </>
  );
};
export default SearchBar;
