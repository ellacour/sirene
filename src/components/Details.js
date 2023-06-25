import React from "react";

function Details({ detailsData, setShowDetails, setDetails }) {
  const handleClose = () => {
    setShowDetails(false);
    setDetails("");
  };
  return (
    <div className="absolute bg-white min-h-full h-full opacity-95 mx-auto z-20 w-full box-border">
      <div className="w-full relative p-20">
        <button
          className="absolute right-20 uppercase text-orange-sirene hover:text-orange-sirene-dark font-bold"
          onClick={handleClose}
        >
          fermer
        </button>
        <div className="max-w-lg mx-auto flex flex-col p-14 gap-10">
          <p className="text-base font-medium text-gray-900 truncate">
            {detailsData.uniteLegale.denominationUniteLegale}
          </p>
          <p className="text-sm text-gray-500 truncate ">
            {detailsData.adresseEtablissement.numeroVoieEtablissement}{" "}
            {detailsData.adresseEtablissement.typeVoieEtablissement}{" "}
            {detailsData.adresseEtablissement.libelleVoieEtablissement}{" "}
            {detailsData.adresseEtablissement.libelleCommuneEtablissement}
          </p>
          <p className="text-sm text-gray-500">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
            qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
            sed quia non numquam eius modi tempora incidunt ut labore et dolore
            magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
            nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
            aliquid ex ea commodi consequatur? Quis autem vel eum iure
            reprehenderit qui in ea voluptate velit esse quam nihil molestiae
            consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla
            pariatur?
          </p>
        </div>
      </div>
    </div>
  );
}

export default Details;
