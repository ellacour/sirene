import React from "react";
import oups from "../oups.png";

export const Listing = ({ data, setShowDetails, setDetails }) => {
  const handleDetails = (item) => {
    setDetails(item);
    setShowDetails(true);
  };
  return (
    <div>
      {!data.length ? (
        <img
          className=" max-w-sm z-10 mx-auto"
          src={oups}
          alt="une erreur s'est produite"
        />
      ) : (
        <ul className="divide-y divide-gray-200 z-10 bg-white bg-opacity-85 p-2 rounded border border-gray-100 drop-shadow-md">
          {data.map((item) => (
            <li key={item.siret} className="p-3 sm:pb-4">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <button
                    onClick={() => handleDetails(item)}
                    type="button"
                    className="text-white bg-orange-sirene hover:bg-orange-sirene-dark focus:ring-4 focus:outline-none focus:ring-orange-sirene-light font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2"
                  >
                    <svg
                      aria-hidden="true"
                      className="w-4 h-4"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z" />
                    </svg>
                    <span className="sr-only">Icon description</span>
                  </button>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-base font-medium text-gray-900 truncate">
                    {item.uniteLegale.denominationUniteLegale}
                  </p>
                  <p className="text-sm text-gray-500 truncate ">
                    {item.adresseEtablissement.numeroVoieEtablissement}{" "}
                    {item.adresseEtablissement.libelleVoieEtablissement}{" "}
                    {item.adresseEtablissement.libelleCommuneEtablissement}
                  </p>
                </div>
                <div className="inline-flex items-center text-sm font-semibold text-gray-900">
                  SIRET : {item.siret}
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
