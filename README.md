## CC1 - Clean Code - YAMS

Ceci est le README du projet CC1 pour le cours Clean Code du 30 octobre 2025.

Besoin de vitest et npm (et c'est tout j'imagine ?)

Lien github : https://github.com/LucasVerrecchia/TPCleanCode

Regles du yams :

"Au 1er lancer le joueur jette tous ses dés. S'il est satisfait du résultat, il peut s’arrêter là et noter le score de la combinaison sur la fiche de score, sinon il rejoue.
Au 2ème et 3ème lancer, le joueur a le choix de relancer tous ses dés ou seulement quelques-uns pour tenter de réaliser une combinaison."

source : https://www.agoralude.com/blog/-la-regle-du-yams-ou-du-jeu-du-yahtzee-n43

## Commentaires

Je n'ai pas eu le temps de m'attaquer a la logiqe de total des points, surtout a cause d'une incomprehension du sujet de ma part (pour moi le yams on garce qu'un lancer pour compter son score) : du coup j'ai compris trop tard que le but etait de calculer la somme des scores de tout les lancés passé en paramètre plutot que de juste calculer un score pour un lancer donné.
Mais si on appelle la fonction pour chaque lancé et qu'on additionne les resultats, cela devrait résoudre le problème.