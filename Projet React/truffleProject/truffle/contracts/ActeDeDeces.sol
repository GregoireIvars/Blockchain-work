// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./ActeDeNaissances.sol";

contract ActeDeDeces {
    address owner;
    mapping (uint256 => Deces) public actes;
    mapping (bytes32 => bool) public actesNaissance; // mapping pour stocker les actes de naissance existants
    uint256 public nombreActes;

    struct Deces {
        string nom;
        string prenom;
        uint256 dateDeces;
        uint256 dateEnregistrement;
    }
    
    event ActeAjoute(string nom, string prenom, uint256 dateDeces, uint256 dateEnregistrement);

    constructor() {
        owner = msg.sender;
        nombreActes = 0;
    }
    
    modifier onlyOwner() {
        require(msg.sender == owner, "Seul le proprietaire du contrat peut effectuer cette action");
        _;
    }
    
    function ajouterActe(string memory _nom, string memory _prenom, uint256 _dateDeces, bytes32 hashActe) public onlyOwner {
        require(_dateDeces > 0, "La date de deces doit etre valide");
        uint256 dateEnregistrement = block.timestamp;
        actes[nombreActes] = Deces(_nom, _prenom, _dateDeces, dateEnregistrement);
        nombreActes++;
        emit ActeAjoute(_nom, _prenom, _dateDeces, dateEnregistrement);
    }
    
    function getActe(uint256 _numeroActe) public view returns (string memory nom, string memory prenom, uint256 dateDeces, uint256 dateEnregistrement) {
        require(_numeroActe < nombreActes, "L acte demande n existe pas");
        Deces memory deces = actes[_numeroActe];
        nom = deces.nom;
        prenom = deces.prenom;
        dateDeces = deces.dateDeces;
        dateEnregistrement = deces.dateEnregistrement;
    }

   function displayAllActes() public view returns (Deces[] memory) {
    Deces[] memory actesDeces = new Deces[](nombreActes);
    for (uint i = 0; i < nombreActes; i++) {
        actesDeces[i] = actes[i];
    }
    return actesDeces;
}
    
}