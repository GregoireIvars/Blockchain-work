import React, { useState, useEffect } from "react";
import Web3 from "web3";
import ActeDeNaissancesContract from "../contracts/ActeDeNaissances.json";

function ActeDeNaissances() {
  const [contract, setContract] = useState(null);
  const [accounts, setAccounts] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fatherFirstName, setFatherFirstName] = useState("");
  const [fatherLastName, setFatherLastName] = useState("");
  const [motherFirstName, setMotherFirstName] = useState("");
  const [motherLastName, setMotherLastName] = useState("");
  const [birthCity, setBirthCity] = useState("");
  const [transactionHash, setTransactionHash] = useState(null);
  const [acteIndex, setActeIndex] = useState(0);
  const [acteData, setActeData] = useState(null);
  const [editFirstName, setEditFirstName] = useState(""); // added this line

  useEffect(() => {
    async function init() {
      if (window.ethereum) {
        try {
          await window.ethereum.enable();
          const web3 = new Web3(window.ethereum);
          const accounts = await web3.eth.getAccounts();
          setAccounts(accounts);
          const networkId = await web3.eth.net.getId();
          const deployedNetwork = ActeDeNaissancesContract.networks[networkId];
          const contract = new web3.eth.Contract(
            ActeDeNaissancesContract.abi,
            deployedNetwork && deployedNetwork.address
          );
          setContract(contract);
        } catch (error) {
          console.error(error);
        }
      }
    }
    init();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const result = await contract.methods
        .enregistrerNaissance(
          firstName,
          lastName,
          fatherFirstName,
          fatherLastName,
          motherFirstName,
          motherLastName,
          birthCity
        )
        .send({ from: accounts[0] });
      setTransactionHash(result.transactionHash);
    } catch (error) {
      console.error(error);
    }
  };

  const handleEditActe = async (event) => {
    event.preventDefault();
    try {
      const result = await contract.methods
        .modifierNaissance(
          acteIndex,
          editFirstName, // modified this line
          lastName,
          fatherFirstName,
          fatherLastName,
          motherFirstName,
          motherLastName,
          birthCity
        )
        .send({ from: accounts[0] });
      setTransactionHash(result.transactionHash);
    } catch (error) {
      console.error(error);
    }
  };

  const handleGetActe = async () => {
    const acte = await contract.methods.obtenirNaissance(acteIndex).call();
    setActeData(acte);
  };

        return (
            <div>
                <h1>Acte de Naissance</h1>
                {contract && accounts && (
                    <><form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="firstName">First name:</label>
                            <input
                                type="text"
                                id="firstName"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)} />
                        </div>
                        <div>
                            <label htmlFor="lastName">Last name:</label>
                            <input
                                type="text"
                                id="lastName"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)} />
                        </div>
                        <div>
                            <label htmlFor="fatherFirstName">Father's first name:</label>
                            <input
                                type="text"
                                id="fatherFirstName"
                                value={fatherFirstName}
                                onChange={(e) => setFatherFirstName(e.target.value)} />
                        </div>
                        <div>
                            <label htmlFor="fatherLastName">Father's last name:</label>
                            <input
                                type="text"
                                id="fatherLastName"
                                value={fatherLastName}
                                onChange={(e) => setFatherLastName(e.target.value)} />
                        </div>
                        <div>
                            <label htmlFor="motherFirstName">Prénom de la mère :</label>
                            <input
                                type="text"
                                id="motherFirstName"
                                value={motherFirstName}
                                onChange={(event) => setMotherFirstName(event.target.value)} />
                        </div>
                        <div>
                            <input
                                type="text"
                                id="motherLastName"
                                value={motherLastName}
                                onChange={(event) => setMotherLastName(event.target.value)} />
                        </div>
                        <div>
                            <label htmlFor="birthCity">Ville de naissance :</label>
                            <input
                                type="text"
                                id="birthCity"
                                value={birthCity}
                                onChange={(event) => setBirthCity(event.target.value)} />
                        </div>
                        <button onClick={handleSubmit}>Générer l'acte de naissance</button>
                    </form><div>
                        <h1>Editer un acte de naissance</h1>
                        <label>
                            Index de l'acte :
                            <input type="number" value={acteIndex} onChange={(e) => setActeIndex(e.target.value)} />
                        </label>
                        <button onClick={handleGetActe}>Obtenir l'acte</button>
                        {acteData && (
                            <form onSubmit={handleEditActe}>
                                <div>
                                    <label htmlFor="editFirstName">First name:</label>
                                    <input
                                        type="text"
                                        id="editFirstName"
                                        value={editFirstName}
                                        onChange={(e) => setEditFirstName(e.target.value)} />
                                </div>
                                <div>
                                    <label htmlFor="editLastName">Last name:</label>
                                    <input
                                        type="text"
                                        id="editLastName"
                                        value={editLastName}
                                        onChange={(e) => setEditLastName(e.target.value)} />
                                </div>
                                <div>
                                    <label htmlFor="editFatherFirstName">Father's first name:</label>
                                    <input
                                        type="text"
                                        id="editFatherFirstName"
                                        value={editFatherFirstName}
                                        onChange={(e) => setEditFatherFirstName(e.target.value)} />
                                </div>
                                <div>
                                    <label htmlFor="editFatherLastName">Father's last name:</label>
                                    <input
                                        type="text"
                                        id="editFatherLastName"
                                        value={editFatherLastName}
                                        onChange={(e) => setEditFatherLastName(e.target.value)} />
                                </div>
                                <div>
                                    <label htmlFor="editMotherFirstName">Prénom de la mère :</label>
                                    <input
                                        type="text"
                                        id="editMotherFirstName"
                                        value={editMotherFirstName}
                                        onChange={(event) => setEditMotherFirstName(event.target.value)} />
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        id="editMotherLastName"
                                        value={editMotherLastName}
                                        onChange={(event) => setEditMotherLastName(event.target.value)} />
                                </div>
                                <div>
                                    <label htmlFor="editBirthCity">Ville de naissance :</label>
                                    <input
                                        type="text"
                                        id="editBirthCity"
                                        value={editBirthCity}
                                        onChange={(event) => setEditBirthCity(event.target.value)} />
                                </div>
                                <button type="submit">Modifier l'acte de naissance</button>

                            </form>
                        )}
                    </div>
                    {transactionHash && <p>Transaction hash: {transactionHash}</p>}
                </>
            )}
        </div>
    );

    }

    export default ActeDeNaissances;
    