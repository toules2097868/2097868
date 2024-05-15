function demandeFactoriel(){	
var nb = prompt("Choisissez un nombre",'');
var fact=1;
var i=nb;
while (i>1)
{
fact*=i;
 i-=1;
}
alert ("Factorielle " + nb + " = " + fact);
}