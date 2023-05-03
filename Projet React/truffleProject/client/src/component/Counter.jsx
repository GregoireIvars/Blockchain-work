import React, { useState, useEffect } from "react";
import Web3 from "web3";
import CounterContract from "../contracts/Counter.json"

function Counter() {
  const [web3, setWeb3] = useState(null);
  const [accounts, setAccounts] = useState([]);
  const [contract, setContract] = useState(null);
  const [count, setCount] = useState(0);

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

          // Enregistre Web3, les comptes et le contrat Counter dans le state
          setWeb3(web3);
          setAccounts(accounts);
          const networkId = await web3.eth.net.getId();
          const deployedNetwork = CounterContract.networks[networkId];
          const contract = new web3.eth.Contract(
            CounterContract.abi,
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
//----------------------CounterContrat Function-----------------------------------------
  // Récupère la valeur actuelle du compteur et la met à jour dans le state
  async function updateCount() {
    const count = await contract.methods.get().call();
    setCount(count);
  }

  // Incrémente le compteur sur le contrat et met à jour le state
  async function incrementCount() {
    await contract.methods.inc().send({ from: accounts[0] });
    updateCount();
  }

  // Décrémente le compteur sur le contrat et met à jour le state
  async function decrementCount() {
    await contract.methods.dec().send({ from: accounts[0] });
    updateCount();
  }
//---------------------- End CounterContrat Function-----------------------------------------
  return (
    <div>
      <h1>Counter</h1>
      <p>Current count: {count}</p>
      <button onClick={incrementCount}>Increment</button>
      <button onClick={decrementCount}>Decrement</button>
    </div>
  );
}

export default Counter;