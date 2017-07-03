var joueur = prompt("entrez Pierre ,feuille où ciseaux");
var ordi = Math.random();
 
 if(ordi < .33 ){
 	return "pierre";
 }

 else if (ordi <= .67) {
 	return "feuille";

 }

 else {
 	return "ciseaux";
 }
 console.log("choix ordi:" + ordi);