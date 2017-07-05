var comp1 =0;
var comp2 = 0;

// dom

var bP = document.querySelector('#btnP');
var bF = document.querySelector('#btnF');
var bC = document.querySelector('#btnC');

var divP = document.querySelector('#divP');
var divF = document.querySelector('#divF');
var divC = document.querySelector('#divC');

bP.addEventListener('click',p);
function p(){
 divP.style.display = 'block';
}

bF.addEventListener('click',f);
function f(){
 divF.style.display = 'block';
}

bC.addEventListener('click',c);
function c(){
 divC.style.display = 'block';
}




while(comp1 !== 3 && comp2 !==3  && choixUtilisateur !== "stop"){

	 var choixUtilisateur = prompt("Choisissez-vous pierre, feuille, ou ciseaux ?").toLowerCase();
	var choixOrdi = Math.random();
	// arrêter le jeu
	if (choixUtilisateur === "s"){
		alert("Dommage...");
		break;

	}
	else if ((choixUtilisateur === '' ) && (choixUtilisateur !== "pierre") && (choixUtilisateur !== 'feuille') && (choixUtilisateur !== "ciseaux")){
		alert('Veuillez choisir Pierre ,feuille ou Ciseaux');

	}
	

	
if (choixOrdi < 0.34) {
	choixOrdi = "pierre";

} else if(choixOrdi <= 0.67) {
	choixOrdi = "feuille";

} else {
	choixOrdi = "ciseaux";
}
 alert("Ordinateur : " + choixOrdi);

var comparer = function (choixUtilisateur,choixOrdi){
           if (choixUtilisateur === choixOrdi)
        {
            return "Egalité !";
        } 

    else if (choixUtilisateur === "pierre") 
    {
    if (choixOrdi === "ciseaux")
    {
    	comp1 ++;
        return "pierre gagne !";
        
    } 
    else 
    {
    	comp2 ++;
        return "feuille gagne !";
    }
    } 
    else if (choixUtilisateur === "feuille") 
    {
    if (choixOrdi === "pierre") 

    {
    	comp1 ++;
        return "feuille gagne !";
    }
    else 
    {
    	comp2 ++;
        return "ciseaux gagnent !";
    }
    }

     else if (choixUtilisateur === "ciseaux")
     {
     	if (choixOrdi === "pierre")
     {
 			comp2++;
 			return "pierre gagne";

  }
  else 
  {
  	comp1++;
  	return "ciseaux gagnent";
  }
}
}

 alert(comparer(choixUtilisateur,choixOrdi));

alert(" joueur " + comp1  + " " +" Ordi" + comp2);
}

if (comp1 === 3){
	alert("viens boire un coup...")
}
else if (comp2 === 3){
	alert("T'as pas le niveau");
}
else{
	alert("Merci d'avoir participé");
}


// dom
// afficher l'img pierre quand je clique sur le boutton






           
          


 



