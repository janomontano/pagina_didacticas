function corregirTest(){
	var nota=0;
	
	if(document.getElementById("p11").checked){
		nota=nota+1;
	}else{
		nota=nota-1;
	}
	
	if(document.getElementById("p2").value=="String" || document.getElementById("p2").value=="string" || document.getElementById("p2").value=="STRING"){
		nota=nota+1;
	}else{
		nota=nota-1;
	}
	
	if(document.getElementById("p33").checked && document.getElementById("p35").checked){
		nota=nota+4;
	}else if(document.getElementById("p33").checked || document.getElementById("p35").checked){
		nota=nota+2;
	}else{
		nota=nota-1;
	}
	
	var e = document.getElementById("ddlViewBy");
	if(e.options[e.selectedIndex].value==1){
		nota=nota+1;
	}

	
	
}