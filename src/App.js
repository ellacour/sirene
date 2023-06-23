import logo from "./logo-sirene.jpeg";
import searching from "./searching.png";
import error from "./error.png";
import {apiResponse} from "./__Fixtures/reponse.js"
import "./App.css";
import {Listing} from "./components/Listing";
import {Details} from "./components/Details"
import { useState } from "react";

function App() {
  const [showDetails, setShowDetails] = useState(false);
  const [details, setDetails] = useState();

  return (
    <>
    {showDetails && <Details className="container mx-auto h-screen" detailsData={details} setShowDetails={setShowDetails} setDetails={setDetails}/> }
    <div className="container mx-auto h-screen flex flex-col p-14 gap-20">
      
      <img className="rounded-lg drop-shadow-md max-w-[90px] z-10" src={logo} alt="Logo" />
      <img className="absolute right-0 max-w-md z-0 opacity-80" src={searching} alt="Logo" />
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
            id="default-search"
            className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-100 rounded-lg bg-gray-10 focus:ring-orange-500 focus:border-orange-500"
            placeholder="Saisissez un numero siret ou une raison sociale"
            required
          />
          <button
            type="submit"
            className="text-white absolute right-2.5 bottom-2.5 bg-orange-sirene hover:bg-orange-sirene-dark focus:ring-4 focus:ring-orange-sirene font-bold uppercase rounded-lg text-sm px-4 py-2"
          >
            Rechercher
          </button>      
        </div>

      
      </form>
      {apiResponse.header.statut === 200 ?  
 <Listing data={apiResponse.etablissements} setShowDetails={setShowDetails} setDetails={setDetails}/> :<img className=" max-w-sm z-10 mx-auto" src={error} alt="une erreur s'est produite" /> }
    
    </div></>

  );
}

export default App;
