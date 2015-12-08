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
	reverseMethod = phrase.split("").reverse().join("");
	console.log(reverseMethod);*/



// Leap Year 
/*	function numberOfDays(year){
		var calcularAño = (year%4 != 0) ? console.log("Año normal") : console.log("Año bisiesto");
	};
	numberOfDays(2015);

*/




	

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


// Days until Chrismas
	/*var date = new Date(),
		chrismas = new Date(date.getFullYear(),11,25),
		daysInAYear = 365,
		calculateChrismas = chrismas.getDate()-date.getDate(),
		result = daysInAYear - calculateChrismas;
		console.log(daysInAYear - result + " Days until Christmas")
	*/



// Url of the site
	// alert(document.URL); 




// Reverse number
 /* function reverseNumber(num){
    num = num + "";
    console.log(num.split("").reverse().join("")); 
  }

  reverseNumber(320);*/




// Palindrome function
  /*function palindrome(phrase){
    var spaceDelete = phrase.replace(/\s+/g, '');
    reverse = spaceDelete.split("").reverse().join("");
    if (spaceDelete === reverse) {
        console.log("Es un palindromo");
    } else {
        console.log("No es un palindromo");
    }
  }
    
   palindrome("race car")*/



// alphabetical order
	/*var alphabet = "abcdefghijklmnopqrstuvwxyz",
		alpArray = alphabet.split(""),
		todos = [],
		firstLetter = [],
		LastLetter = [],
		orderArray = [];
	function alphabeticalOrder(phrase) {
	  var stringArray = phrase.split("");
	  console.log(stringArray)
	  for (var j = 0; j < stringArray.length; j++) {
	  	for (var i = 0; i < alpArray.length; i++) {
	      var arreglo = [],
	      nombreArreglo = [];
	      if(stringArray[j] === alpArray[i]) {
	    		arreglo = [i];
	    		todos.push(arreglo[0]);
	      }
	    }
	  }
	todos.sort(function(a, b){return a-b});
	console.log(todos)
	var frase = phrase.split("").sort().join("");
	console.log(frase)
	}
	alphabeticalOrder("jaime")
	*/




// to uupercase thefirst letter
	/*function upperCase(phrase) {
		var arr = phrase.split(" "),
			newArr = [];
		for (var i = 0; i < arr.length; i++) {
			newArr.push(arr[i].charAt(0).toUpperCase() + arr[i].slice(1))
		}
		console.log(newArr.join(" "));
	}

	upperCase("jaime martinez simental salvador")*/




// Longest wornd n a String
/*	function longString(phrase) {
	  var arr = phrase.split(" "),
	      newArr = arr[0];
	    for (var i = 0; i < arr.length; i++) {
	      if (newArr.length < arr[i].length) {
	      	newArr = arr[i];
	      }
	    }
	    console.log(newArr)
	};

	longString("Jaime salvadoreeddddddddddddde martinezddddddddd simental")*/



// Vowels in a string
/*	function vowelString(phrase) {
	  var arr = phrase.split(""),
	      vowelArray = "aeiou".split(""),
	      sum = 0;
	  for (var j = 0; j < vowelArray.length; j++) {
	    for (var i = 0; i < arr.length; i++) {
	      if(vowelArray[j] === arr[i]){
	    		sum += arr[i].length;
	    	}
	    }
	  }
	console.log("There are " + sum + " vowels in " + phrase)
	};

	vowelString("iliana mellado preciosa")*/



// Find if is a Prime number
/*	var number = 7,
		  total;
	function primeNumber(num) {
	  if (num === 1) {
	  	return false
	  }
	 for (var i = 2; i < num; i++) {
	  	if (num % i === 0){
	  		return false
	  	} else {
	  		return	true
	  	}
	  }
	};
	total = primeNumber(number);
	if (total === false) {
		console.log("El numero " + number + " no es primo");
	} else {
		console.log("El numero " + number + " es primo");
	}*/



// Return type of elemente
/*	function type(value) {
		return typeof value
	}
	console.log(type(true))*/







// Img slider 
	// var counter = 0;
	// var container = $('.images-slider img');
	// var allImg = [
	// 	"img/gallery-1.jpg",
	// 	"img/gallery-2.jpg",
	// 	"img/gallery-3.jpg",
	// 	"img/gallery-4.jpg",
	// 	"img/gallery-5.jpg",
	// 	"img/gallery-6.jpg",
	// 	"img/gallery-7.jpg",
	// 	"img/gallery-8.jpg",
	// 	"img/gallery-9.jpg"
	// ];
	// var downImg = new Image();
	// downImg.onload = function(){
	//   loadImages();
	//   setInterval( loadImages, 3000);
	// };
	// function loadImages() {
	// 	for (var i = 0; i < container.length; i++) {
	// 		$(container[i]).attr('src', allImg[i]);
	// 		counter++
	// 		console.log(counter)
	// 		if (counter > 3 && counter < 7) {
	// 			$(container[i]).attr('src', allImg[i + 3]);
	// 		} 
	// 		if (counter > 6) {
	// 			$(container[i]).attr('src', allImg[i + 6]);
	// 		   }
	// 		if(counter >= allImg.length) {
	// 			counter = 0;
	// 		}
	// 	}
	// };


	// downImg.src = "img/gallery-1.jpg";





























// Sum of multiples of 3 and 5
	/*
	var resultado = 0;
	for (var i = 1; i < 1000; i++) {
	    if (((i % 3) === 0) || ((i % 5) === 0)) {
	        resultado += i;
	    }
	}
	console.log(resultado);
	



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