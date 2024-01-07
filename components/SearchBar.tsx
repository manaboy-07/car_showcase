"use client";
import React from "react";
import { SearchManufaturer } from "./SearchManufaturer";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const SearchButton = ({ otherClasses }: { otherClasses: string }) => (
  <button type="submit" className={`-ml-3 z-10 ${otherClasses}`}>
    <Image
      src={"/magnifying-glass.svg"}
      alt="magnifying-glass"
      width={40}
      height={40}
      className="object-contain"
    />
  </button>
);
function SearchBar() {
  const router = useRouter();

  const [manufacturer, setManufacturer] = useState("");
  const [model, setModel] = useState("");

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (manufacturer === "" && model === "") {
      return alert("Please fill in the search bar");
    }

    updateSearchParams(model.toLowerCase(), manufacturer.toLowerCase());
  };

  //generate new pathname
  //e.g localhost://3000?manfuacturte='smth'&model=""
  const updateSearchParams = (model: string, manufacturer: string) => {
    //this will put the data in the search params
    //then in order to fetch and perform re-render to fetch the cars
    //thiose parameters that were just pushed i will need to get them again and make
    // an automatic request to the api
    const searchParams = new URLSearchParams(window.location.search);
    if (model) {
      searchParams.set("model", model);
    } else {
      searchParams.delete("model");
    }
    if (model) {
      searchParams.set("manufacturer", manufacturer);
    } else {
      searchParams.delete("manufacturer");
    }
    const newPathname = `${
      window.location.pathname
    }?${searchParams.toString()}`;

    router.push(newPathname);
  };
  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufaturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
        <SearchButton otherClasses="sm:hidden" />

        <div className="searchbar__item">
          <Image
            src="/model-icon.png"
            width={25}
            height={25}
            className="absolute w-[20px] h-[20px] ml-4"
            alt="car model"
          />
          <input
            type="text"
            name="model"
            value={model}
            onChange={(e) => setModel(e.target.value)}
            placeholder="Tiguan"
            className="searchbar__input"
          />
          <SearchButton otherClasses="sm:hidden" />
        </div>
        <SearchButton otherClasses="max-sm:hidden" />
      </div>
    </form>
  );
}

export default SearchBar;
