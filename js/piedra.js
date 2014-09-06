function Aleatorio(min, max) {
	var number = Math.floor(Math.random() * (max - min + 1) + min);
	return number;
}

var options = ["Piedra", "Papel", "Tijeras", "Lagarto", "Spock"];

var userOption = parseInt(prompt("Haz tu elección :\nPiedra > escoge 0\nPapel > escoge 1\nTijera > escoge 2\nLagarto > escoge 3\nSpock > escoge 4", 0));

if (isNaN(userOption)){
	alert("Has escogido un valor no numérico");
}else if((userOption==0)||(userOption==1)||(userOption==2)||(userOption==3)||(userOption==4)){
	alert("Has escogido " + options[userOption]);
}else{
	alert("Has escogido " + userOption);
}

var machineOption = Aleatorio(0,4);
alert("La computadora eligió " + options[machineOption]);

if(userOption==0){
	if(machineOption==0) {
		alert("Has empatado contra la máquina\n( Piedra vs Piedra )");
	}else if(machineOption==1){
		alert("Has perdido contra la máquina\n( El papel cubre a la piedra )");
	}else if(machineOption==2){
		alert("Has ganado a la máquina\n( La piedra aplasta las tijeras )");
	}else if(machineOption==3){
		alert("Has ganado a la máquina\n( La piedra aplasta al lagarto )");
	}else if(machineOption==4){
		alert("Has perdido contra la máquina\n( Spock vaporiza la piedra )");
	}
}else if(userOption==1){
	if(machineOption==0) {
		alert("Has ganado a la máquina\n( El papel cubre a la piedra )");
	}else if(machineOption==1){
		alert("Has empatado contra la máquina\n( Papel vs Papel )");
	}else if(machineOption==2){
		alert("Has perdido contra la máquina\n( Las tijeras cortan el papel )");
	}else if(machineOption==3){
		alert("Has perdido contra la máquina\n( El lagarto se come el papel )");
	}else if(machineOption==4){
		alert("Has ganado a la máquina\n( El papel refuta a Spock )");
	}
}else if(userOption==2){
	if(machineOption==0) {
		alert("Has perdido contra la máquina\n( La piedra aplasta las tijeras )");
	}else if(machineOption==1){
		alert("Has ganado a la máquina\n( Las tijeras cortan el papel )");
	}else if(machineOption==2){
		alert("Has empatado contra la máquina\n( Tijeras vs Tijeras )");
	}else if(machineOption==3){
		alert("Has ganado a la máquina\n( Las tijeras decapitan al lagarto )");
	}else if(machineOption==4){
		alert("Has perdido contra la máquina\n( Spock destroza las tijeras )");
	}
}else if(userOption==3){
	if(machineOption==0) {
		alert("Has perdido contra la máquina\n( La piedra aplasta al lagarto )");
	}else if(machineOption==1){
		alert("Has ganado a la máquina\n( El lagarto se come el papel )");
	}else if(machineOption==2){
		alert("Has perdido contra la máquina\n( Las tijeras decapitan al lagarto )");
	}else if(machineOption==3){
		alert("Has empatado contra la máquina\n( Lagarto vs Lagarto )");
	}else if(machineOption==4){
		alert("Has ganado a la máquina\n( El lagarto envenena a Spock )");
	}
}else if(userOption==4){
	if(machineOption==0) {
		alert("Has ganado a la máquina\n( Spock vaporiza la piedra )");
	}else if(machineOption==1){
		alert("Has perdido contra la máquina\n( El papel refuta a Spock )");
	}else if(machineOption==2){
		alert("Has ganado a la máquina\n( Spock destroza las tijeras )");
	}else if(machineOption==3){
		alert("Has perdido contra la máquina\n( El lagarto envenena a Spock )");
	}else if(machineOption==4){
		alert("Has empatado contra la máquina\n( Spock vs Spock )");
	}
}else if ((userOption!=0)||(userOption!=1)||(userOption!=2)||(userOption!=3)||(userOption!=4)){
	alert("El valor introducido es erróneo\n( Recuerda que debes introducir valores del 0 al 4 )");
}
