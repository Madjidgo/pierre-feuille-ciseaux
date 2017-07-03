var comp1 =0;
var comp2 = 0;

while(comp1 !== 3 && comp2 !==3  && choixUtilisateur !== "stop"){

	 var choixUtilisateur = prompt("Choisissez-vous pierre, feuille, ou ciseaux ?").toLowerCase();
	var choixOrdi = Math.random();
	if (choixUtilisateur === "stop"){
		alert("salaud");
		break;
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

  }
 alert(comparer(choixUtilisateur,choixOrdi));

alert(" joueur " + comp1  + " " +" Ordi" + comp2);
}