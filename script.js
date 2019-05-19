  /*Esta funcion se utiliza para obtener los valores del select multiple*/
  function getSelectValues(select) {
  var result = [];
  var options = select && select.options;
  var opt;

  for (var i=0, iLen=options.length; i<iLen; i++) {
    opt = options[i];

    if (opt.selected) {
      result.push(opt.value || opt.text);
    }
  }
  return result;
}
/* Funcion que se llama cuando pulsamos el boton "enviar" */
function corregirTest(){
	var bandera=validar(); //Primero validamos que se han rellenado todos los datos.
	if(bandera==0){
	var nota=0;//Empezamos con la nota de 0
	
	if(document.getElementById("p13").checked){
		nota=nota+1.5; //Si el elemento correcto esta chequeado, entonces sumamos la puntuacion 
	}
	//En la pregunta 2 se tiene que introducir una palabra en el input. Si esta palabra coincide con la respuesta esperada, entonces sumamos la puntuacion.
	if(document.getElementById("p2").value=="String" || document.getElementById("p2").value=="string" || document.getElementById("p2").value=="STRING"){
		nota=nota+1.5; 
	}
	//En la pregunta 3 se tiene una serie de checkbox. Tiene varias respuestas. Si los elementos de respuesta correcta estan chequeados, entonces sumamos la puntuacion total
	if(document.getElementById("p33").checked && document.getElementById("p35").checked){
		nota=nota+2;
	}else if(document.getElementById("p33").checked || document.getElementById("p35").checked){// En caso de que solo una respuesta sea correcta, sumamos la mitad de la valoracion.
		nota=nota+1;
	}
	//Obtenemos los valores del elemento p4, si coincide con la respuesta, sumamos puntos.
	var pru=document.getElementById("p4");
	var val=getSelectValues(pru)
	if(val[0]=='d'){
		nota=nota+2;
	}
	
	//Al igual que en el resto, se obtiene las respuestas dadas por el usuario y se comprueban que son las correctas.
	var prueba=document.getElementById("p5");
	var valores=getSelectValues(prueba)
	if(valores[0]=='b' && valores[1]=='c'){
		nota=nota+2;
	}else if(valores[0]=='b' || valores[1]=='c'){
		nota=nota+1;
		}
	if (minutos < 1) {
		nota = nota +1;
		}

	parar ();//Paramos el cronometro
	
	/*Rellenamos la calificacion*/
	document.getElementById('resNombre').innerText=document.getElementById("fname").value;
	document.getElementById('resApellido').innerText=document.getElementById("lname").value;
	document.getElementById('resNota').innerText=nota;
	document.getElementById('resTiempo').innerText=document.getElementById("Horas").textContent+document.getElementById("Minutos").textContent+document.getElementById("Segundos").textContent+document.getElementById("Centesimas").textContent;

	}
}
//Esta funcion valida que todos los campos se hayan rellenado. De lo contrario, no se continuara con la correcion del examen.
function validar(){
	var bandera=0;
	if(!document.getElementById("p11").checked && !document.getElementById("p12").checked && !document.getElementById("p13").checked){
		document.getElementById("resp1").style.display="block";//Mostramos el mensaje de error si no esta todo relleno
		bandera=1;
	}else{
		document.getElementById("resp1").style.display="none";//Escondemos el mensaje de error si esta todo relleno.
	}
	
	if(document.getElementById("p2").value==""){
		document.getElementById("resp2").style.display="block";
		bandera=1;
	}else{
		document.getElementById("resp2").style.display="none";
	}
	
	if(!document.getElementById("p31").checked && !document.getElementById("p32").checked && 
		!document.getElementById("p33").checked && !document.getElementById("p34").checked &&
		!document.getElementById("p35").checked){
			document.getElementById("resp3").style.display="block";
			bandera=1;
		}else{
			document.getElementById("resp3").style.display="none";
		}
		
	if (document.getElementById("p4").value== "f") {
		document.getElementById("resp4").style.display="block";
		bandera=1;
		}else{
			document.getElementById("resp4").style.display="none";
		}

	if (document.getElementById("p5").selectedIndex == -1) {
		document.getElementById("resp5").style.display="block";
		bandera=1;
	}else{
		document.getElementById("resp5").style.display="none";
	}
		
	//Si todo esta relleno, devolvemos 0, en caso contrario, devolvemos 1. Si devolvemos 1 no se realiza la correcion y se espera que el usuario lo rellene.
	return bandera;
		
		
		
		
}

//Funciones del contador
var centesimas = 0;
var segundos = 0;
var minutos = 0;
var horas = 0;
function inicio () {
	control = setInterval(cronometro,10);
}
function parar () {
	clearInterval(control);

}

function cronometro () {
	if (centesimas < 99) {
		centesimas++;
		if (centesimas < 10) { centesimas = "0"+centesimas }
		Centesimas.innerHTML = ":"+centesimas;
	}
	if (centesimas == 99) {
		centesimas = -1;
	}
	if (centesimas == 0) {
		segundos ++;
		if (segundos < 10) { segundos = "0"+segundos }
		Segundos.innerHTML = ":"+segundos;
	}
	if (segundos == 59) {
		segundos = -1;
	}
	if ( (centesimas == 0)&&(segundos == 0) ) {
		minutos++;
		if (minutos < 10) { minutos = "0"+minutos }
		Minutos.innerHTML = ":"+minutos;
	}
	if (minutos == 59) {
		minutos = -1;
	}
	if ( (centesimas == 0)&&(segundos == 0)&&(minutos == 0) ) {
		horas ++;
		if (horas < 10) { horas = "0"+horas }
		Horas.innerHTML = horas;
	}
}