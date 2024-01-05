"use client";
import React from "react";
import { SearchManufaturer } from "./SearchManufaturer";
import { useState } from "react";

function SearchBar() {
  const handleSearch = () => {};
  const [manufacturer, setManufacturer] = useState("");
  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufaturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
      </div>
    </form>
  );
}

export default SearchBar;
