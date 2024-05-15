function demandeBoucle(){	
for(var i=0; i<5; i++)
{
    if (i == 3) 
    break;
    document.write("<br> i est: " + i);
}
document.write("<br>Après la boucle");
}