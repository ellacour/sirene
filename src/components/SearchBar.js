import React, { useState } from "react";

function SearchBar({ handleResultsReceived, setShowModal, jeton }) {
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = (e) => {
    if(!inputValue)return;
    e.preventDefault();
    setIsLoading(true);

    const siretRegex = /\d{14}/g;
    const isSiret = inputValue.match(siretRegex);

    const search = isSiret
      ? `siret:${inputValue}`
      : `raisonSociale:(${inputValue.replace(/ /g, "%20AND%20raisonSociale:")}*)`;

    fetch(`https://api.insee.fr/entreprises/sirene/V3/siret?q=${search}`, {
      headers: { Authorization: `Bearer ${jeton}` },
    })
      .then((response) => response.json())
      .then((data) => {
        handleResultsReceived(data);
        setIsLoading(false);setInputValue("")
      })
      .catch((error) => {
        console.error("ERROR:",error);
        setIsLoading(false);
        setInputValue("")
        setShowModal(true)
      });
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <form className="mt-12">
      <div className="relative drop-shadow-md">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-gray-500 dark:text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div>
        <input
          type="search"
          id="searchInput"
          value={inputValue}
          onChange={handleInputChange}
          className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-100 rounded-lg bg-gray-10 focus:ring-orange-500 focus:border-orange-500"
          placeholder="Saisissez un numero siret ou une raison sociale"
          required
        />

        <button
          disabled={isLoading}
          onClick={(e) => fetchData(e)}
          className="disabled:opacity-75
          text-white absolute right-0 bottom-0 top-0 bg-orange-sirene hover:bg-orange-sirene-dark focus:ring-4 focus:ring-orange-sirene font-bold uppercase 
          rounded-r-lg text-sm px-4 py-2"
        >
          Rechercher
        </button>
      </div>
    </form>
  );
}

export default SearchBar;
