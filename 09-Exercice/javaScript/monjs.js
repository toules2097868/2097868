function demandeJour(){
 var obDate = new Date();
 var jour = obDate.getDay();
 var nomJour;
switch (jour)
{
    case 0:nomJour="Dimanche";
		break;
	case 1:nomJour="Lundi";
		break;
	case 2:nomJour="Mardi";
		break;
	case 3:nomJour="Mercredi";
		break;
	case 4:nomJour="Jeudi";
		break;
	case 5:nomJour="Vendredi";
		break;
	case 6:nomJour="Samedi";
		break;
	default:nomJour="Aucune journée de la semaine!";
}
alert("Nous sommes " + nomJour + " !");
}