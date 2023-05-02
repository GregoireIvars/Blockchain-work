

### Définition

On peut la considérer comme une grande base de donnée  mais avec quelques particularité
Plus exactement la blockchain est : 

C'est une base de donnée décentraliser sécuriser permettant l'échange, le stockage et transfert de ressource. 

Elle est voué à rester transparent et immuable.

Cette dernière fonctionne en P2P (peer to peer) 

L'immuabilité signifie que une fois une donnée ajouté / push sur la blockchain 
cette dernière restera à vie sur la blockchain sans moyen de modification ou suppression

On peut résumer la blockchain en 5 termes principaux : 

- **Décentralisation** 
- **Sécurité**
- **Stockage, et transfert**
- **Transparence**
- **Immuable***

La validation des blocks passe par un méthode dites de Consensus.
Algorithme de Consensus
Il existe des divers et varie en voici deux exemples : 

**POW :  proof of work** , est un mécanisme employé par le bitcoin consistant à résoudre les problèmes mathématiques complexe afin de valider des transaction et permet la création de nouveau block. 
Les personnes résolvant ces problèmes sont appeler des mineurs, le premier à réussir à résoudre ce problèmes sera rémunérer en Bitcoin.
Malgré tout ce processus est très couteux énergiquement parlant et demande une quantité conséquente de puissances, mais offre l'avantage d'être très sécuriser. 


**POS:  proof of stake**, Employer par la blockchain ETH (Ethereum) et consiste 



### Block 

Dans la blockchain, un bloc (ou block en anglais) est une unité de données qui contient un ensemble de transactions confirmées. Chaque bloc contient un en-tête (header) et une liste de transactions.

L'en-tête d'un bloc contient des informations importantes, telles que :

-   Le numéro de bloc : l'ordre chronologique du bloc dans la blockchain.
-   Le hash du bloc précédent : le hash du bloc qui précède ce bloc dans la blockchain, qui crée ainsi une chaîne de blocs (d'où le nom "blockchain").
-   Le hash de la racine de l'arbre de Merkle : une structure de données qui résume les transactions contenues dans le bloc.
-   La date et l'heure de création du bloc.
-   La difficulté de minage : une mesure de la difficulté à trouver le hash qui correspond aux critères de validation du bloc.

La liste des transactions contenue dans un bloc est également importante car elle contient des informations sur les transferts de fonds et les contrats intelligents qui ont été exécutés. Les mineurs de la blockchain vérifient et valident ces transactions avant de les ajouter au bloc.

Une fois qu'un bloc est créé, il est diffusé sur le réseau de la blockchain et est vérifié et validé par les autres noeuds. Une fois qu'un bloc est accepté par la majorité des noeuds, il est ajouté à la blockchain et devient immuable. Cela signifie que les transactions contenues dans le bloc ne peuvent plus être modifiées ou supprimées.

En résumé, un bloc dans la blockchain est une unité de données qui contient un en-tête et une liste de transactions confirmées. Les blocs sont créés par les mineurs de la blockchain, diffusés sur le réseau et vérifiés par les noeuds avant d'être ajoutés à la blockchain.


### Domaine d'application 

- Cryptomonnaie
- Finance
- Sante
- Logistique
- Immobilier


### Site Crypto

[Etherscan](https://etherscan.io/)
[Metamask](https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=fr)



## Solidity

### Définition : 

Solidity est un langage de programmation orienté objet utilisé pour écrire des contrats intelligents (smart contracts) sur la blockchain Ethereum. Il a été créé par Gavin Wood, Christian Reitwiessner et d'autres développeurs pour fournir une manière sûre et efficace de programmer des contrats intelligents.

### Qu'est-ce qu'un contrat intelligent ?

Les contrats intelligents sont des programmes informatiques autonomes qui s'exécutent sur la blockchain Ethereum. Ils permettent aux développeurs de créer des applications décentralisées (dApps) en utilisant la technologie blockchain, sans avoir besoin d'un tiers de confiance pour vérifier les transactions ou exécuter les contrats. Les contrats intelligents sont exécutés sur la blockchain Ethereum, ce qui signifie que leur exécution est transparente, immuable et résistante à la censure.

### Les fonctionnalités de Solidity

Solidity est conçu pour être facilement compréhensible par les développeurs qui connaissent déjà des langages de programmation tels que C++, Python ou JavaScript. Il est également équipé de nombreuses fonctionnalités pour permettre la sécurité et la robustesse des contrats intelligents, telles que :

-   Typage statique : Solidity utilise un typage statique pour éviter les erreurs de type courantes dans les programmes.
-   Contrôle des exceptions : Solidity dispose d'un système d'exceptions qui permet aux développeurs de gérer les erreurs et les situations imprévues dans leurs contrats.
-   Bibliothèques : Solidity prend en charge les bibliothèques de contrats intelligents, qui permettent aux développeurs de réutiliser le code existant et de réduire la taille des contrats.
-   Modificateurs : Les modificateurs sont des fonctions qui peuvent être utilisées pour modifier le comportement d'autres fonctions dans un contrat.
-   Héritage : Les contrats Solidity peuvent être hérités d'autres contrats, ce qui permet aux développeurs de créer des contrats plus complexes en utilisant une approche modulaire.

### Utilisations de Solidity

Solidity est un élément clé de l'écosystème Ethereum, permettant aux développeurs de créer des applications décentralisées sur la blockchain Ethereum. Il est utilisé pour créer des contrats intelligents pour des applications telles que les plateformes de vente aux enchères, les échanges décentralisés, les systèmes de vote, les portefeuilles numériques et bien plus encore.


L'emploie de Solidity peut se faire via l'ide [Remix](https://remix.ethereum.org/#lang=en&optimize=false&runs=200&evmVersion=null&version=soljson-v0.8.18+commit.87f61d96.js)





## Noeud dans la blockchain

Un noeud dans la blockchain est un ordinateur ou un serveur qui est connecté à la blockchain et qui exécute un logiciel de noeud pour vérifier et valider les transactions et les blocs de la blockchain. Les noeuds jouent un rôle important dans la sécurité et la décentralisation de la blockchain, car ils aident à maintenir une copie exacte et à jour de la blockchain sur le réseau.

Les noeuds peuvent être classés en deux catégories :

-   Noeuds complets (full nodes) : ils stockent une copie complète de la blockchain et valident chaque transaction et chaque bloc eux-mêmes.
    
-   Noeuds légers (light nodes) : ils n'ont pas besoin de stocker l'ensemble de la blockchain et se reposent sur des noeuds complets pour valider les transactions et les blocs.
    

## Remix (IDE)

Remix est un environnement de développement intégré (IDE) open-source pour la blockchain Ethereum. Il permet aux développeurs de créer, de déployer et de tester des contrats intelligents sur la blockchain Ethereum. Remix prend en charge plusieurs langages de programmation tels que Solidity, Vyper et Serpent.

Remix est doté de plusieurs fonctionnalités utiles pour les développeurs, notamment :

-   Éditeur de code : Il permet aux développeurs d'écrire et de modifier des contrats intelligents en utilisant des langages de programmation pris en charge par Ethereum.
    
-   Débogage : Il permet aux développeurs de déboguer leurs contrats intelligents pour trouver et corriger les erreurs de code.
    
-   Compilation : Il permet aux développeurs de compiler leurs contrats intelligents pour les déployer sur la blockchain Ethereum.
    
-   Déploiement : Il permet aux développeurs de déployer leurs contrats intelligents sur la blockchain Ethereum en utilisant une variété de méthodes de déploiement.
    

## Infura

Infura est une plateforme de service web qui fournit un accès à des noeuds Ethereum pour les développeurs et les utilisateurs d'applications décentralisées. Infura permet aux développeurs d'accéder facilement aux données de la blockchain Ethereum et d'interagir avec les contrats intelligents sans avoir besoin de gérer leur propre noeud.

Infura fournit également des fonctionnalités telles que la gestion de comptes, les transactions, les événements et les notifications, ce qui facilite la création d'applications décentralisées basées sur la blockchain Ethereum.

## GETH

Geth (Go Ethereum) est un logiciel de noeud complet open-source pour la blockchain Ethereum, développé en langage Go. Geth permet aux utilisateurs de rejoindre le réseau Ethereum en tant que noeud complet et de participer à la vérification et à la validation des transactions et des blocs sur la blockchain.

Geth fournit également des fonctionnalités telles que la création et la gestion de portefeuilles Ethereum, la mise en œuvre de contrats intelligents, l'interaction avec la blockchain Ethereum via des API, ainsi que le minage de blocs pour gagner des récompenses en crypto-monnaies.

En résumé, les noeuds sont des ordinateurs ou des serveurs connectés à la blockchain qui vérifient et valident les transactions et les blocs sur le réseau. Remix est un environnement de développement intégré pour créer, déployer et tester des contrats intelligents sur la blockchain Ethereum. Infura est une plate










