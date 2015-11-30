var button = document.getElementById('button'),
	limpiar = document.getElementById('limpiar'),
	resultado = document.getElementById('resultados'),
	primero = document.getElementById('input1'),
	segundo = document.getElementById('input2');
resultado.innerHTML = "Inserte un Numero";
function multiplication(){
	x = parseInt(primero.value), 
	y = parseInt(segundo.value),
	results = russe(x, y);
	resultado.innerHTML = results;
}
function russe(u, y) {
	var resultado = 0;
	for(var i = x; i >= 1; i/=2 ){
		if(i % 2 != 0){
			resultado += y;
		} 
		y *= 2;
	}
	return resultado;
}
button.onclick = function(){
	multiplication();
}
limpiar.onclick = function(){
	primero.value = "";
	segundo.value = "";
	resultado.innerHTML = "";
}
primero.onfocus = function(){
	resultado.innerHTML = "";
}
segundo.onfocus = function(){
	resultado.innerHTML = "";
}
