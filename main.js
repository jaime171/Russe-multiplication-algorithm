// Russe Multiplication
/*	var button = document.getElementById('button'),
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
	}*/



// Calculate date 
	/*var date = new Date();
	var dd = date.getDate(); 
	var mm = date.getMonth()+1;
	var yyyy = date.getFullYear();
	if(dd<10) {  
	    dd='0'+dd;  
	}  
	else if (mm<10) {
	  mm='0'+mm;
	}
	date = dd+'/'+mm+'/'+yyyy+'/';
	console.log(date)*/



// Calculate Triangle Area and Perimeter
	/*var side1 = 5,
	    side2 = 6,
	    side3 = 7,
	    perimeter = (side1 + side2 + side3)/2,
	 	area =  Math.sqrt(perimeter*((perimeter-side1)*(perimeter-side2)*(perimeter-side3)));
	 	console.log(perimeter);
	    console.log(area);*/


// Rever a String and delete commas
	/*var phrase = "w3resource";
	reverseMethod = phrase.split("").reverse().join(),
	newString = reverseMethod.replace(/,/g, "");
	console.log(newString);*/



// Leap Year 
	/*var date = new Date(),
		addYear = date.getFullYear();
	function numberOfDays(year){
		var calcularAño = (year%4 != 0) ? console.log("Año normal") : console.log("Año bisiesto");
	};
	numberOfDays(2016);*/






	

// 1 st January is being a Sunday this "year"

	/*for (var i = 2014; i <= 2050; i++) {
		date = new Date(i,0,1),
		day = date.getDay();
		if(day === 0){
			console.log("This year " + i + ", in January First was Sunday")
		}
	}*/

	




// Random number Game
	/*function myFunction(){
		var ask = prompt("Choose a number from 1 to 10\n0 para cerrar");
		number = parseInt(ask),
		randomNum = Math.floor(Math.random() * 11);
		if(number != randomNum) {
			console.log("Try Again");
			myFunction();
		} else if ( number === 0) {
			console.log("Gracias por jugar");
		} else {
			console.log("You won");
		}
	}
	myFunction()*/




























// Sum of multiples of 3 and 5
	/*
	var resultado = 0;
	for (var i = 1; i < 1000; i++) {
	    if (((i % 3) === 0) || ((i % 5) === 0)) {
	        resultado += i;
	    }
	}
	console.log(resultado);
	*/



// Fibonacci Sequence
	/*
	var resultado = 0,
		suma = 0,
		num1 = 1,
		num2 = 1;
	while(resultado <= 4000000) {
		if((resultado % 2) === 0){
			suma += resultado;
		}
		resultado = num1 + num2; 
		num2 = num1; //   
		num1 = resultado; //  
	console.log(resultado)
	}*/




// Prime Factorization
	/*
	var originalTarget = 600851475143;
	var target = originalTarget;
	var i = 2;
	while(i<target) {
		while(target%i === 0) {		
			(function(newtarget) {		
				target = newtarget;	
			})(target / i)
		}
		i++;
	}
	console.log(target);*/




//Object Oriented example
	/*function person(first, last, age, eye) {
	    this.firstName = first;
	    this.lastName = last;
	    this.age = age;
	    this.eyeColor = eye;
	}
	person.prototype.bio = function() {
	    return this.firstName + " " + this.lastName
	};
	var myFather = new person("John", "Doe", 50, "blue");
	var resultado = document.getElementById("resultados").innerHTML = "My father is " + myFather.bio(); */