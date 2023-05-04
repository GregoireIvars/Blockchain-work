import React, { useState, useEffect } from "react";
import Web3 from "web3";
import ActeDeNaissancesContract from "../contracts/ActeDeNaissances.json"

function ActeDeNaissances() {
  const [web3, setWeb3] = useState(null);
  const [accounts, setAccounts] = useState([]);
  const [contract, setContract] = useState(null);
  const [acte, setActe] = useState(null);
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [perePrenom, setPerePrenom] = useState("");
  const [pereNom, setPereNom] = useState("");
  const [merePrenom, setMerePrenom] = useState("");
  const [mereNom, setMereNom] = useState("");
  const [dateNaissances, setdateNaissances] = useState("");
  const [nombreNaissance, setnombreNaissance] = useState(1);
  const [actes, setActes] = useState([]);
  const [hash, setHash] = useState("");

  useEffect(() => {
    async function init() {
      // Metamask injecte Web3 dans la fenêtre de l'application
      if (window.ethereum) {
        try {
          // Demande à l'utilisateur l'autorisation d'utiliser Metamask
          await window.ethereum.enable();

          // Crée une instance de Web3 avec l'instance injectée par Metamask
          const web3 = new Web3(window.ethereum);

          // Récupère la liste des comptes Metamask
          const accounts = await web3.eth.getAccounts();

          // Enregistre Web3, les comptes et le contrat ActeDeNaissances dans le state
          setWeb3(web3);
          setAccounts(accounts);
          const networkId = await web3.eth.net.getId();
          const deployedNetwork = ActeDeNaissancesContract.networks[networkId];
          const contract = new web3.eth.Contract(
            ActeDeNaissancesContract.abi,
            deployedNetwork && deployedNetwork.address,
          );
          setContract(contract);
        } catch (error) {
          console.error(error);
        }
      } else {
        console.error("Metamask n'est pas installé sur cette application");
      }
    }
    init();
  }, []);

  async function ajouterActeN(nom, prenom, pereNom, perePrenom, mereNom, merePrenom, dateNaissances) {
    const dateNaissancesTimestamp = Date.parse(dateNaissances) / 1000;
    await contract.methods.ajouterActeN(nom, prenom, pereNom, perePrenom, mereNom, merePrenom, dateNaissancesTimestamp).send({ from: accounts[0] });
    const nombreNaissance = await contract.methods.nombreNaissance().call();
    const actes = await Promise.all(
      Array(Number(nombreNaissance))
        .fill()
        .map((_, index) => contract.methods.getActe(index).call())
    );
    setActes(actes);
    setnombreNaissance(nombreNaissance);
    const hash = await contract.methods.getHash(actes.length - 1).call();
    setHash(hash);
  }

  // Soumet le formulaire pour ajouter un nouvel acte de décès
  function handleSubmit(event) {
    event.preventDefault();
    ajouterActeN(nom, prenom, pereNom, perePrenom, mereNom, merePrenom, dateNaissances);
    console.log(nombreNaissance);
  }

  return (
    <div>
      <h1>Acte de naissances</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nom:
          <input type="text" value={nom} onChange={e => setNom(e.target.value)} />
        </label>
        <label>
          Prénom:
          <input type="text" value={prenom} onChange={e => setPrenom(e.target.value)} />
        </label>
        <label>
          Père Nom:
          <input type="text" value={perePrenom} onChange={e => setPerePrenom(e.target.value)} />
        </label>
        <label>
          Père Prénom:
          <input type="text" value={pereNom} onChange={e => setPereNom(e.target.value)} />
        </label>
        <label>
          Mère Nom:
          <input type="text" value={merePrenom} onChange={e => setMerePrenom(e.target.value)} />
        </label>
        <label>
          Mère Prénom:
          <input type="text" value={mereNom} onChange={e => setMereNom(e.target.value)} />
        </label>
        <label>
          Date de Naissance:
          <input type="date" value={dateNaissances} onChange={e => setdateNaissances(e.target.value)} />
        </label>
        <button type="submit">Enregistrer l'acte de naissances</button>
      </form>
      {actes.length > 0 && (
        <div>
          <h2>Liste des actes de Naissances enregistrés:</h2>
          <ul>
            {actes.map((acte, index) => (
              <li key={index}>
                <p><strong>Nom:</strong> {acte.nom}</p>
                <p><strong>Prénom:</strong> {acte.prenom}</p>
                <p><strong>Père Nom:</strong> {acte.perePrenom}</p>
                <p><strong>Père Nom:</strong> {acte.pereNom}</p>
                <p><strong>Mère Prénom:</strong> {acte.merePrenom}</p>
                <p><strong>Mère Nom:</strong> {acte.mereNom}</p>
                <p><strong>Date de Naissance:</strong> {new Date(acte.dateNaissances * 1000).toLocaleDateString()}</p>
                <p><strong>Date d'enregistrement:</strong> {new Date(acte.dateEnregistrement * 1000).toLocaleString()}</p>
                {hash && (
                  <p>
                    <strong>Hash:</strong> {hash}
                  </p>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
export default ActeDeNaissances;