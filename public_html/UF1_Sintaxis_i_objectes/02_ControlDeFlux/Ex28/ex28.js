//Declarem la suma de totes les edats
var sumaMati = 0
var sumaTarda = 0
var sumaNit = 0

//Primer demanem les edats del torn de matí
for (i=0; i <5; i++)
{
	var edat = parseInt(prompt("Introdueix una edat del torn de mati ("+(i+1)+" de 5):"))
	sumaMati += edat //sumem cada edat a la suma total
}
// demanem les edats del torn de tarda
for (i=0; i <6; i++)
{
	var edat = parseInt(prompt("Introdueix una edat del torn de tarda ("+(i+1)+" de 6):"))
	sumaTarda += edat
}
// demanem les edats del torn de Nit
for (i=0; i <11; i++)
{
	var edat = parseInt(prompt("Introdueix una edat del torn de nit ("+(i+1)+" de 11):"))
	sumaNit += edat
}
//Fem les mitjanes
var mitjanaMati = sumaMati / 5
var mitjanaTarda= sumaTarda/ 6
var mitjanaNit = sumaNit / 11

//Imprimim les mitjanes
alert("Mitjana mati: "+mitjanaMati)
alert("Mitjana tarda:  "+mitjanaTarda)
alert("Mitjana nit: "+mitjanaNit)

//Busquem quina mitjana és més gran
if (mitjanaMati > mitjanaTarda)
{
	if (mitjanaMati > mitjanaNit)
	{
		alert("Els alumnes del torn de mati son mes grans")
	}
	else
	{
		alert("Els alumnes del torn de nit son mes grans")
	}
}
else
{
	if (mitjanaTarda > mitjanaNit)
	{
		alert("Els alumnes del torn de tarda son mes grans")
	}
	else
	{
		alert("Els alumnes del torn de nit son mes grans")
	}
}
