import React from "react";

function Pagination({
  postsPerPage,
  totalPosts,
  paginateFront,
  paginateBack,
  currentPage,
}) {
  return (
    <div className="py-2 text-center -mt-10">
      <div className="text-center mb-4">
        <p className="text-sm text-gray-700">
          Resultats de
          <span className="font-bold mx-1">
            {currentPage * postsPerPage - 4}
          </span>
          à
          <span className="font-bold mx-1">{currentPage * postsPerPage}</span>
          sur
          <span className="font-bold mx-1">{totalPosts}</span>
          résultats
        </p>
      </div>
      <nav className="block"></nav>
      <div>
        <nav
          className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
          aria-label="Pagination"
        >
          <button
            onClick={() => {
              paginateBack();
            }}
            href="#"
            className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
          >
            <span>Précédent</span>
          </button>

          <button
            onClick={() => {
              paginateFront();
            }}
            href="#"
            className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
          >
            <span>Suivant</span>
          </button>
        </nav>
      </div>
    </div>
  );
}

export default Pagination;
