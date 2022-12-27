//On commence par définir des variables essentielles pour le jeu.
// (scores) ==> est le score global d'un joueur durant le jeu. Le joueur gagne la partie quand il atteint  100 comme score
// (roundscore) ==> est le score temporaire d'un joueur. il a la possibilité de déverser son roundscore dans le score global. 
// (activePlayer) ==> est une instance pour travailler sur le joueur en activité. c'est à dire celui qui joue. 
// gaming est un booléen simple qui nous permettra d'initialiser le jeu.
let scores, roundScore, activePlayer, gaming;

init();  // on utilse ce bloc pour initialiser le jeu simplement. on on l'appelera plus tard


// Pour créer le jeu on commencera par créer le boutton de lancement du dé. Pourt ce fait on va  créer une fonction. cette fonction permettra
// de générer d'abord un nombre aléatoire entre 1 et 6 (à l'image du dé). Ensuite, on essaira d'afficger le résultat en image dans le jeu et
// l'ajouter dans le roundScore du joueur actif. on fait de sorte que si le joueur jour "1" il passe son tour.




