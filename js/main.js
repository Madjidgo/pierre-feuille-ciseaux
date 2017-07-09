var comp1 =0;
var comp2 = 0;

// entrez nom:
var nom1 = prompt("Veuillez indiquer votre nom d'utilisateur...");
var nom = document.getElementById('nom') ;
nom.innerHTML= ('Entrez votre Nom:'+ nom1);


var buttons = document.querySelectorAll("button");
      
      for (let i = 0; i < buttons.length; i++){
        buttons[i].addEventListener("click", a);
        function a () {
          var choixUtilisateur = buttons[i].name;


  var pp = document.querySelector('#pp');
  var pp1 = document.querySelector('#pp1');
  var pp2 = document.querySelector('#pp2');
  
  var choixOrdi = Math.random();
		
if (choixOrdi < 0.34) {
	choixOrdi = "pierre";


} else if(choixOrdi <= 0.67) {
	choixOrdi = "feuille";

} else {
	choixOrdi = "ciseaux";
}
 pp2.innerHTML=("Ordinateur : " + choixOrdi);

// var comparer = function (choixUtilisateur,choixOrdi){
           if (choixUtilisateur === choixOrdi)
        {
            pp.innerHTML=("Egalité !") ;
        } 

    else if (choixUtilisateur === "pierre") 
    {
    if (choixOrdi === "ciseaux")
    {
    	comp1 ++;
        pp1.innerHTML= (" pierre gagne !") ;
        
    } 
    else 
    {
    	comp2 ++;
        pp2.innerHTML= ( "feuille gagne !");
    }
    } 
    else if (choixUtilisateur === "feuille") 
    {
    if (choixOrdi === "pierre") 

    {
    	comp1 ++;
        pp1.innerHTML= ( "feuille gagne !");
    }
    else 
    {
    	comp2 ++;
        pp2.innerHTML= ( "ciseaux gagnent !");
    }
    }

     else if (choixUtilisateur === "ciseaux")
     {
     	if (choixOrdi === "pierre")
     {
 			comp2++;
 			pp2.innerHTML= ( "pierre gagne");

  }
  else 
  {
  	comp1++;
  	pp1.innerHTML=("feuille gagne");
  }
}

// compte
  pp3.innerHTML= (" joueur " + comp1  + " " +" Ordi" + comp2);





// choixOrdi
if (choixOrdi === "pierre" ) {
  pp2.innerHTML = '<img class= "img-fluid" src="img/pierre.jpg" alt="pierre">';
}
else if (choixOrdi === "feuille"){
  pp2.innerHTML = '<img class= "img-fluid" src="img/feuille.jpg" alt="feuille">';
}
else{
  pp2.innerHTML = '<img class= "img-fluid" src="img/ciseaux.jpg" alt="ciseaux">';
}


// choix Utilisateurs
if (choixUtilisateur === "pierre" ) {
  pp1.innerHTML = '<img class= "img-fluid" src="img/pierre.jpg" alt="pierre">';
}
else if (choixUtilisateur === "feuille"){
  pp1.innerHTML = '<img class= "img-fluid" src="img/feuille.jpg" alt="feuille">';
}
else{
  pp1.innerHTML = '<img class= "img-fluid" src="img/ciseaux.jpg" alt="ciseaux">';
}
// fermeture du for

}
}
// reset
var reset = document.getElementById('reset');
reset.addEventListener('click',fReset);
function fReset (){
pp3.innerHTML= (" joueur " + 0  + " " +" Ordi" + 0);
}



// animation
var x = document.getElementById('btnP');
x.addEventListener('click',y);
function y(){
   pp1.style.backgroundColor = 'red';
   pp2.style.backgroundColor = 'orange';
   
}

var x1 = document.getElementById('btnF');
x1.addEventListener('click',y1);
function y1(){
  pp1.style.backgroundColor = 'green';
  pp2.style.backgroundColor = 'yellow';

}

var x2 = document.getElementById('btnC');
x2.addEventListener('click',y2);
function y2(){
  pp1.style.backgroundColor = 'blue';
  pp2.style.backgroundColor = '#f89';
}

// h1 animation

var h1 = document.getElementById('demo')

h1.addEventListener('mouseover',mouseOver);
function mouseOver() {

    h1.style.color = "red";
    h1.style.opacity = "0.5";
    h1.style.fontSize = '50px';


}
h1.addEventListener('mouseout',mouseOut);
function mouseOut() {
    h1.style.color = "black";
     h1.style.opacity = "1";
     h1.style.fontSize = '40px';
}
