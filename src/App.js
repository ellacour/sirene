import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import logo from "./logo-sirene.jpeg";
import searching from "./searching.png";
import "./App.css";
import Listing from "./components/Listing";
import Details from "./components/Details";
import SearchBar from "./components/SeachBar";

const queryClient = new QueryClient();
function App() {
  const [showDetails, setShowDetails] = useState(false);
  const [details, setDetails] = useState();
  const [searchResult, setSearchResult] = useState();
  const [searchState, setSearchState] = useState();

  const handleResultsReceived = (results) => {
    setSearchResult(results);
    setSearchState(results.header.statut);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <div>
        {showDetails && (
          <Details
            className="container mx-auto h-screen"
            detailsData={details}
            setShowDetails={setShowDetails}
            setDetails={setDetails}
          />
        )}
        <div className="container mx-auto h-screen flex flex-col p-14 gap-20">
          <img
            className="rounded-lg drop-shadow-md max-w-[90px] z-10"
            src={logo}
            alt="Logo"
          />
          <img
            className="absolute right-0 max-w-md z-0"
            src={searching}
            alt="Logo"
          />
          <SearchBar handleResultsReceived={handleResultsReceived} />
          {searchResult && searchState === 200 ? (
            <Listing
              data={searchResult.etablissements}
              setShowDetails={setShowDetails}
              setDetails={setDetails}
            />
          ) : (
            <div className="mt-20 text-center text-xl uppercase font-bold z-10 text-slate-400">Pas de resultats à afficher</div>
          )}
        </div>
      </div>
    </QueryClientProvider>
  );
}

export default App;
