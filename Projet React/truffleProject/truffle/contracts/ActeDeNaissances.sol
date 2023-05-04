// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ActeDeNaissances {
    address owner;
    mapping(uint256 => Naissances) public actes;
    uint256 public nombreNaissance;
    bytes32 public hashe;

    struct Naissances {
        string nom;
        string prenom;
        string pereNom;
        string perePrenom;
        string mereNom;
        string merePrenom;
        uint256 dateNaissances;
        uint256 dateEnregistrement;
        bytes32 hashe;
    }
    event ActeAjoute(
        string nom,
        string prenom,
        string pereNom,
        string perePrenom,
        string mereNom,
        string merePrenom,
        uint256 dateNaissances,
        uint256 dateEnregistrement
    );

    constructor() {
        owner = msg.sender;
        nombreNaissance = 0;
    }

    modifier onlyOwner() {
        require(
            msg.sender == owner,
            "Seul le proprietaire du contrat peut effectuer cette action"
        );
        _;
    }

    function ajouterActeN(
        string memory _nom,
        string memory _prenom,
        string memory _pereNom,
        string memory _perePrenom,
        string memory _mereNom,
        string memory _merePrenom,
        uint256 _dateNaissances
    ) public onlyOwner {
        require(_dateNaissances > 0, "La date de Naissances doit etre valide");
        uint256 dateEnregistrement = block.timestamp;
        bytes32 hashActe = keccak256(
            abi.encodePacked(
                _nom,
                _prenom,
                _pereNom,
                _perePrenom,
                _mereNom,
                _merePrenom,
                _dateNaissances,
                dateEnregistrement
            )
        );
        actes[nombreNaissance] = Naissances(
            _nom,
            _prenom,
            _pereNom,
            _perePrenom,
            _mereNom,
            _merePrenom,
            _dateNaissances,
            dateEnregistrement,
            hashActe
        );
        nombreNaissance++;
        hashe = hashActe;
        emit ActeAjoute(
            _nom,
            _prenom,
            _pereNom,
            _perePrenom,
            _mereNom,
            _merePrenom,
            _dateNaissances,
            dateEnregistrement
        );
    }

   function getHash(uint256 _numeroNaissances) public view returns (bytes32) {
    require(
        _numeroNaissances < nombreNaissance,
        "L'acte demande n'existe pas"
    );
    Naissances memory naissances = actes[_numeroNaissances];
    bytes32 hashActe = keccak256(
        abi.encodePacked(
            naissances.nom,
            naissances.prenom,
            naissances.pereNom,
            naissances.perePrenom,
            naissances.mereNom,
            naissances.merePrenom,
            naissances.dateNaissances,
            naissances.dateEnregistrement
        )
    );
    return hashActe;
}

    function getActe(
        uint256 _numeroNaissances
    )
        public
        view
        returns (
            string memory nom,
            string memory prenom,
            string memory pereNom,
            string memory perePrenom,
            string memory mereNom,
            string memory merePrenom,
            uint256 dateNaissances,
            uint256 dateEnregistrement
        )
    {
        {
            require(
                _numeroNaissances < nombreNaissance,
                "L acte demande n existe pas"
            );
            Naissances memory naissances = actes[_numeroNaissances];
            nom = naissances.nom;
            prenom = naissances.prenom;
            pereNom = naissances.pereNom;
            perePrenom = naissances.perePrenom;
            mereNom = naissances.mereNom;
            merePrenom = naissances.merePrenom;
            dateNaissances = naissances.dateNaissances;
            dateEnregistrement = naissances.dateEnregistrement;
        }
    }
     function displayAllActes() public view returns (Naissances[] memory) {
    Naissances[] memory actesNaissances = new Naissances[](nombreNaissance);
    for (uint i = 0; i < nombreNaissance; i++) {
        actesNaissances[i] = actes[i];
    }
}
}
