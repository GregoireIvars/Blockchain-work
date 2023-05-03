import React, { useState, useEffect } from "react";
import Web3 from "web3";
import ActeDeDecesContract from "../contracts/ActeDeDeces.json"

function ActeDeDeces() {
    const [web3, setWeb3] = useState(null);
    const [accounts, setAccounts] = useState([]);
    const [contract, setContract] = useState(null);
    const [acte, setActe] = useState(null);
    const [nom, setNom] = useState("");
    const [prenom, setPrenom] = useState("");
    const [dateDeces, setDateDeces] = useState("");
    const [nombreActes, setNombreActes] = useState(1);
    const [actes, setActes] = useState([]);

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

                    // Enregistre Web3, les comptes et le contrat ActeDeDeces dans le state
                    setWeb3(web3);
                    setAccounts(accounts);
                    const networkId = await web3.eth.net.getId();
                    const deployedNetwork = ActeDeDecesContract.networks[networkId];
                    const contract = new web3.eth.Contract(
                        ActeDeDecesContract.abi,
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

    async function ajouterActe(nom, prenom, dateDeces) {
        const dateDecesTimestamp = Date.parse(dateDeces) / 1000;
        await contract.methods.ajouterActe(nom, prenom, dateDecesTimestamp).send({ from: accounts[0] });
        const nombreActes = await contract.methods.nombreActes().call();
        const acte = await contract.methods.getActe(nombreActes - 1).call();
        setActe(acte);
    }

    // Soumet le formulaire pour ajouter un nouvel acte de décès
    function handleSubmit(event) {
        event.preventDefault();
        ajouterActe(nom, prenom, dateDeces);
        console.log(nombreActes);
        
     
        
    }

    return (
        <div>
          <h1>Acte de décès</h1>
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
              Date de décès:
              <input type="date" value={dateDeces} onChange={e => setDateDeces(e.target.value)} />
            </label>
            <button type="submit">Enregistrer l'acte de décès</button>
          </form>
          {nombreActes > 0 && (
            <div>
              <h2>Liste des actes de décès enregistrés:</h2>
              <ul>
                {actes.map((acte, index) => (
                  <li key={index}>
                    <p><strong>Nom:</strong> {acte.nom}</p>
                    <p><strong>Prénom:</strong> {acte.prenom}</p>
                    <p><strong>Date de décès:</strong> {new Date(acte.dateDeces * 1000).toLocaleDateString()}</p>
                    <p><strong>Date d'enregistrement:</strong> {new Date(acte.dateEnregistrement * 1000).toLocaleString()}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      );
}
export default ActeDeDeces;