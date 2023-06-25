import React, { useState } from "react";

function JetonModale({ setShowModal, setCookie }) {
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [jetonIsValid, setJetonIsValid] = useState(false);


  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const setJeton = (e) => {
    if (!inputValue) return;
    e.preventDefault();
    setIsLoading(true);

    fetch(`https://api.insee.fr/entreprises/sirene/V3/informations`, {
      headers: { Authorization: `Bearer ${inputValue}` },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("data", data);
        setIsLoading(false);
        setInputValue("");
        setJetonIsValid(true);
        setShowModal(false);
        setCookie("jeton", inputValue);
      })
      .catch((error) => {
        console.error("ERROR:", error);
        setIsLoading(false);
        setInputValue("");
      });
  };

  const handleClose = () => {
    setShowModal(false);
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
        <div className="max-w-xl mx-auto flex flex-col p-14 gap-5">
          <p className="mt-20 text-center text-xl uppercase font-bold z-10 text-slate-400">
            L'utilisation de cette application necessite un jeton d'accès.
          </p>{" "}
          {!isLoading && (
            <form className="mt-12">
              <div className="relative drop-shadow-md">
                <input
                  type="input"
                  id="jetonInput"
                  value={inputValue}
                  onChange={handleInputChange}
                  className="block w-full p-4 pl-10 text-xs text-gray-900 border border-gray-100 rounded-lg bg-gray-10 focus:ring-orange-500 focus:border-orange-500"
                  placeholder="5e2f32e1-772d-3c20-a959-acf25fe2cbad"
                  required
                />

                <button
                  disabled={isLoading}
                  onClick={(e) => setJeton(e)}
                  className="disabled:opacity-75
          text-white absolute right-0 bottom-0 top-0 bg-orange-sirene hover:bg-orange-sirene-dark focus:ring-4 focus:ring-orange-sirene font-bold uppercase 
          rounded-r-lg text-sm px-4 py-2"
                >
                  enregistrer
                </button>
              </div>
            </form>
          )}
          <p className=" text-center text-medium font-bold z-10 text-slate-400">
            Veuillez saisir votre jeton d'accès ou vous rendre sur{" "}
            <a className="text-orange-sirene" href="https://api.insee.fr/catalogue/site/themes/wso2/subthemes/insee/pages/item-info.jag?name=Sirene&version=V3&provider=insee">
              le site de l'insee
            </a>{" "}
            l'API concernée est Sirene V3.
          </p>
        </div>
      </div>
    </div>
  );
}

export default JetonModale;
