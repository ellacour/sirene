import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import logo from "./logo-sirene.jpeg";
import searching from "./searching.png";
import "./App.css";
import Listing from "./components/Listing";
import Details from "./components/Details";
import SearchBar from "./components/SearchBar";
import Pagination from "./components/Pagination";
import JetonModale from "./components/JetonModale";

function App() {
  const [cookies, setCookie] = useCookies(["jeton"]);
  const [showDetails, setShowDetails] = useState(false);
  const [showModal, setShowModal] = useState(
    Object.entries(cookies).length === 0
  );
  const [details, setDetails] = useState();
  const [searchResult, setSearchResult] = useState();
  const [searchState, setSearchState] = useState();

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts =
    searchResult && searchResult.etablissements
      ? searchResult.etablissements.slice(indexOfFirstPost, indexOfLastPost)
      : [];

  const paginateFront = () =>
    currentPage < 4 && setCurrentPage(currentPage + 1);
  const paginateBack = () => currentPage > 1 && setCurrentPage(currentPage - 1);

  const handleResultsReceived = (results) => {
    setSearchResult(results);
    setSearchState(results.header.statut);
    setCurrentPage(1);
  };

  return (
    <div>
      {showModal && (
        <JetonModale
          className="container mx-auto h-screen"
          setShowModal={setShowModal}
          setCookie={setCookie}
        />
      )}
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
        <SearchBar
          handleResultsReceived={handleResultsReceived}
          setShowModal={setShowModal}
          jeton={cookies.jeton}
        />
        {searchResult && searchState === 200 ? (
          <Listing
            data={currentPosts}
            setShowDetails={setShowDetails}
            setDetails={setDetails}
          />
        ) : (
          <div className="mt-20 text-center text-xl uppercase font-bold z-10 text-slate-400">
            Pas de resultats à afficher
          </div>
        )}
        {searchState === 200 && searchResult.etablissements?.length > 5 && (
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={searchResult.etablissements.length}
            paginateBack={paginateBack}
            paginateFront={paginateFront}
            currentPage={currentPage}
          />
        )}
      </div>
    </div>
  );
}

export default App;
