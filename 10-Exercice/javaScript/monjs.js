function demandeFactoriel(){	
var nb=prompt("Choisissez un nombre",'');  
var fact=1; 
for (var i=nb; i>1; i-=1)
    fact*=i;
alert("Factorielle " + nb + " = " + fact);
}