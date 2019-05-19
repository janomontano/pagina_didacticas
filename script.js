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

function corregirTest(){
	debugger;
	var bandera=validar();
	if(bandera==0){
	var nota=0;
	
	if(document.getElementById("p13").checked){
		nota=nota+1.5;
	}else{
		nota=nota-1;
	}
	
	if(document.getElementById("p2").value=="String" || document.getElementById("p2").value=="string" || document.getElementById("p2").value=="STRING"){
		nota=nota+1.5;
	}
	if(document.getElementById("p33").checked && document.getElementById("p35").checked){
		nota=nota+2;
	}else if(document.getElementById("p33").checked || document.getElementById("p35").checked){
		nota=nota+1;
	}
	
	var prueba=document.getElementById("p5");
	var valores=getSelectValues(prueba)
	if(valores[0]=='b' && valores[1]=='d'){
		nota=nota+2;
	}
	
	
	
	alert("Su nota es:" + nota);
	}
}

function validar(){
	var bandera=0;
	if(!document.getElementById("p11").checked && !document.getElementById("p12").checked && !document.getElementById("p13").checked){
		document.getElementById("resp1").style.display="block";
		bandera=1;
	}else{
		document.getElementById("resp1").style.display="none";
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
		
	
	return bandera;
		
		
		
		
}

var centesimas = 0;
var segundos = 0;
var minutos = 0;
var horas = 0;
function inicio () {
	control = setInterval(cronometro,10);
	document.getElementById("inicio").disabled = true;
	document.getElementById("parar").disabled = false;
	document.getElementById("continuar").disabled = true;
	document.getElementById("reinicio").disabled = false;
}
function parar () {
	clearInterval(control);
	document.getElementById("parar").disabled = true;
	document.getElementById("continuar").disabled = false;
}
function reinicio () {
	clearInterval(control);
	centesimas = 0;
	segundos = 0;
	minutos = 0;
	horas = 0;
	Centesimas.innerHTML = ":00";
	Segundos.innerHTML = ":00";
	Minutos.innerHTML = ":00";
	Horas.innerHTML = "00";
	document.getElementById("inicio").disabled = false;
	document.getElementById("parar").disabled = true;
	document.getElementById("continuar").disabled = true;
	document.getElementById("reinicio").disabled = true;
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