

### Création de notre crypto : 

```Solidity
// SPDX-Licence-Identifier: MIT
pragma solidity ^0.8.19;

import "./ERC20.sol";
contract IsiToken is ERC20 {
//cree un token du nom de isitoken avec comme symbol isi
    constructor(uint256 initialSupply) ERC20("IsiToken", "ISI") {
        _mint(msg.sender, initialSupply);
    }
}
```



La création d'un nouveau workspace génére automatiquement le ERC20 
On peut sinon l'ajouter via le git hub

#### Lien github ERC20
[ERC20](https://github.com/OpenZeppelin/openzeppelin-contracts/tree/master/contracts/token/ERC20)

Une fois cela effectuer plus qu'a bien vérifier les imports et compiler.
Reste plus qu'a paramétrer le déploiement de notre contrat





