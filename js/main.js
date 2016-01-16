



// Russe Multiplication
function eje_1() {
  var button = document.getElementById('button'),
  		limpiar = document.getElementById('clean'),
  		resultText = document.getElementById('russeResults'),
  		primero = document.getElementById('inputRusseOne'),
  		segundo = document.getElementById('inputRusseTwo');
  		resultText.innerHTML = "Inserte un Numero";
  function multiplication(){
    x = parseInt(primero.value), 
  	y = parseInt(segundo.value),
  	str = "Not a number";
  	if((isNaN(x) || isNaN(y)) === false){
  		result = russe(x, y);
  		resultText.innerHTML = "The result is: " + "<strong>" + result + "</strong>";
  	} else if((isNaN(x) || isNaN(y)) === true){
  		resultText.innerHTML = str;
  	}
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
  limpiar.onclick = function(){
 		primero.value = "";
 		segundo.value = "";
 		resultText.innerHTML = "";
 	}
 	primero.onfocus = function(){
 		resultText.innerHTML = "";
 	}
 	segundo.onfocus = function(){
 		resultText.innerHTML = "";
 	}
  multiplication();
}

function eje_2() {
	console.log("work-2")
}


var allFunctions = {
  ejercice_1: function() {
  	eje_1();
  },
  ejercice_2: function() {
  	eje_2();
  }
}

var buttons = document.getElementsByClassName("btn-accion");
var buttonsCount = buttons.length;
// var lightbox = document.getElementById('lightbox');


for (var i = 0; i < buttonsCount; i++) {
  buttons[i].onclick = function(e) {
    var buttonEach = document.getElementById(this.id);
    var ejerciceNumber = buttonEach.dataset.ejercice;
    console.log(ejerciceNumber);
    allFunctions['ejercice_' + ejerciceNumber]();
  }
}


















// //================


















// // Calculate Triangle Area and Perimeter
// 	/*var side1 = 5,
// 	    side2 = 6,
// 	    side3 = 7,
// 	    perimeter = (side1 + side2 + side3)/2,
// 	 	area =  Math.sqrt(perimeter*((perimeter-side1)*(perimeter-side2)*(perimeter-side3)));
// 	 	console.log(perimeter);
// 	    console.log(area);*/


// // Rever a String and delete commas
// 	/*var phrase = "w3resource";
// 	reverseMethod = phrase.split("").reverse().join("");
// 	console.log(reverseMethod);*/



// // Leap Year 
// /*	function numberOfDays(year){
// 		var calcularAño = (year%4 != 0) ? console.log("Año normal") : console.log("Año bisiesto");
// 	};
// 	numberOfDays(2015);

// */




	

// // 1 st January is being a Sunday this "year"

// 	/*for (var i = 2014; i <= 2050; i++) {
// 		date = new Date(i,0,1),
// 		day = date.getDay();
// 		if(day === 0){
// 			console.log("This year " + i + ", in January First was Sunday")
// 		}
// 	}*/

	




// // Random number Game
// 	/*function myFunction(){
// 		var ask = prompt("Choose a number from 1 to 10\n0 para cerrar");
// 		number = parseInt(ask),
// 		randomNum = Math.floor(Math.random() * 11);
// 		if(number != randomNum) {
// 			console.log("Try Again");
// 			myFunction();
// 		} else if ( number === 0) {
// 			console.log("Gracias por jugar");
// 		} else {
// 			console.log("You won");
// 		}
// 	}
// 	myFunction()*/


// // Days until Chrismas
// 	/*var date = new Date(),
// 		chrismas = new Date(date.getFullYear(),11,25),
// 		daysInAYear = 365,
// 		calculateChrismas = chrismas.getDate()-date.getDate(),
// 		result = daysInAYear - calculateChrismas;
// 		console.log(daysInAYear - result + " Days until Christmas")
// 	*/



// // Url of the site
// 	// alert(document.URL); 




// // Reverse number
//  /* function reverseNumber(num){
//     num = num + "";
//     console.log(num.split("").reverse().join("")); 
//   }

//   reverseNumber(320);*/




// // Palindrome function
//   /*function palindrome(phrase){
//     var spaceDelete = phrase.replace(/\s+/g, '');
//     reverse = spaceDelete.split("").reverse().join("");
//     if (spaceDelete === reverse) {
//         console.log("Es un palindromo");
//     } else {
//         console.log("No es un palindromo");
//     }
//   }
    
//    palindrome("race car")*/



// // alphabetical order
// 	/*var alphabet = "abcdefghijklmnopqrstuvwxyz",
// 		alpArray = alphabet.split(""),
// 		todos = [],
// 		firstLetter = [],
// 		LastLetter = [],
// 		orderArray = [];
// 	function alphabeticalOrder(phrase) {
// 	  var stringArray = phrase.split("");
// 	  console.log(stringArray)
// 	  for (var j = 0; j < stringArray.length; j++) {
// 	  	for (var i = 0; i < alpArray.length; i++) {
// 	      var arreglo = [],
// 	      nombreArreglo = [];
// 	      if(stringArray[j] === alpArray[i]) {
// 	    		arreglo = [i];
// 	    		todos.push(arreglo[0]);
// 	      }
// 	    }
// 	  }
// 	todos.sort(function(a, b){return a-b});
// 	console.log(todos)
// 	var frase = phrase.split("").sort().join("");
// 	console.log(frase)
// 	}
// 	alphabeticalOrder("jaime")
// 	*/




// // to uupercase thefirst letter
// 	/*function upperCase(phrase) {
// 		var arr = phrase.split(" "),
// 			newArr = [];
// 		for (var i = 0; i < arr.length; i++) {
// 			newArr.push(arr[i].charAt(0).toUpperCase() + arr[i].slice(1))
// 		}
// 		console.log(newArr.join(" "));
// 	}

// 	upperCase("jaime martinez simental salvador")*/




// // Longest wornd n a String
// /*	function longString(phrase) {
// 	  var arr = phrase.split(" "),
// 	      newArr = arr[0];
// 	    for (var i = 0; i < arr.length; i++) {
// 	      if (newArr.length < arr[i].length) {
// 	      	newArr = arr[i];
// 	      }
// 	    }
// 	    console.log(newArr)
// 	};

// 	longString("Jaime salvadoreeddddddddddddde martinezddddddddd simental")*/



// // Vowels in a string
// /*	function vowelString(phrase) {
// 	  var arr = phrase.split(""),
// 	      vowelArray = "aeiou".split(""),
// 	      sum = 0;
// 	  for (var j = 0; j < vowelArray.length; j++) {
// 	    for (var i = 0; i < arr.length; i++) {
// 	      if(vowelArray[j] === arr[i]){
// 	    		sum += arr[i].length;
// 	    	}
// 	    }
// 	  }
// 	console.log("There are " + sum + " vowels in " + phrase)
// 	};

// 	vowelString("iliana mellado preciosa")*/



// // Find if is a Prime number
// /*	var number = 7,
// 		  total;
// 	function primeNumber(num) {
// 	  if (num === 1) {
// 	  	return false
// 	  }
// 	 for (var i = 2; i < num; i++) {
// 	  	if (num % i === 0){
// 	  		return false
// 	  	} else {
// 	  		return	true
// 	  	}
// 	  }
// 	};
// 	total = primeNumber(number);
// 	if (total === false) {
// 		console.log("El numero " + number + " no es primo");
// 	} else {
// 		console.log("El numero " + number + " es primo");
// 	}*/



// // Return type of elemente
// /*	function type(value) {
// 		return typeof value
// 	}
// 	console.log(type(true))*/







// // Img slider 
// 	// var counter = 0;
// 	// var container = $('.images-slider img');
// 	// var allImg = [
// 	// 	"img/gallery-1.jpg",
// 	// 	"img/gallery-2.jpg",
// 	// 	"img/gallery-3.jpg",
// 	// 	"img/gallery-4.jpg",
// 	// 	"img/gallery-5.jpg",
// 	// 	"img/gallery-6.jpg",
// 	// 	"img/gallery-7.jpg",
// 	// 	"img/gallery-8.jpg",
// 	// 	"img/gallery-9.jpg"
// 	// ];
// 	// var downImg = new Image();
// 	// downImg.onload = function(){
// 	//   loadImages();
// 	//   setInterval( loadImages, 3000);
// 	// };
// 	// function loadImages() {
// 	// 	for (var i = 0; i < container.length; i++) {
// 	// 		$(container[i]).attr('src', allImg[i]);
// 	// 		counter++
// 	// 		console.log(counter)
// 	// 		if (counter > 3 && counter < 7) {
// 	// 			$(container[i]).attr('src', allImg[i + 3]);
// 	// 		} 
// 	// 		if (counter > 6) {
// 	// 			$(container[i]).attr('src', allImg[i + 6]);
// 	// 		   }
// 	// 		if(counter >= allImg.length) {
// 	// 			counter = 0;
// 	// 		}
// 	// 	}
// 	// };
// 	// downImg.src = "img/gallery-1.jpg";


// // Second min and max num in a array
// 	// var num = [3,10,50,8,7];
// 	// var newArr = [];
// 	// function minMaxFunction(numbers) {
// 	// 	var min = Math.min.apply(null, numbers);
// 	// 	var max = Math.max.apply(null, numbers);
// 	//   for (var i = 0; i < numbers.length; i++) {
// 	//   	if (min === numbers[i] || max === numbers[i]){
// 	//   		newArr = numbers;
// 	//   		newArr.splice(i, 1)
// 	//   	}
// 	//   }
// 	//   var newMin = Math.min.apply(null, newArr);
// 	// 	var newMax = Math.max.apply(null, newArr);
// 	// 	console.log(newMin)
// 	// 	console.log(newMax)
// 	// }
// 	// minMaxFunction(num);





// //Perfect numbersW
// 	// function is_perfect(number)  
// 	// {  
// 	// var temp = 0;  
// 	//    for(var i=1;i<=number/2;i++)  
// 	//      {  
// 	//          if(number%i === 0)  
// 	//           {  
// 	//             temp += i; 
// 	//           }  
// 	//      }  
// 	//      if(temp === number)  
// 	//         {  
// 	//        console.log("It is a perfect number.");  
// 	//         }   
// 	//      else  
// 	//         {  
// 	//        console.log("It is not a perfect number.");  
// 	//         }     
// 	//  }   
// 	// is_perfect(28);   



// // Sacar los factores
// 	// function factors(n)  
// 	// {  
// 	//  var num_factors = [], i;  
	   
// 	//  for (i = 1; i <= Math.floor(Math.sqrt(n)); i += 1)  
// 	//   if (n % i === 0)  
// 	//   {  
// 	//    num_factors.push(i);  
// 	//    if (n / i !== i)  
// 	//     num_factors.push(n / i);  
// 	//   }  
// 	//  num_factors.sort(function(x, y)  
// 	//    {  
// 	//      return x - y;});  // numeric sort  
// 	//      return num_factors;  
// 	//     }  
// 	// alert(factors(15));  // [1,3,5,15]   
// 	// alert(factors(16));  // [1,2,4,8,16]   
// 	// alert(factors(17));  // [1,17] 




// // Exponentes
// 	// function exponets(num,exp) {
// 	//   var result = 1;
// 	//   for (var i = 0; i < exp; i++) {
// 	//     result = num * result;
// 	//   }
// 	//   console.log(result)
// 	// }
// 	// exponets(2,8);





// 	// function removeDuplicateCharacters(str) {
// 	//   var char,
// 	//       charCount = {},
// 	//       newStr = [];
// 	//   for(var i = 0; i < str.length; i++) {
// 	//     char = str[i];
// 	//     if(charCount[char]) {
// 	//       charCount[char]++;
// 	//     } else {
// 	//       charCount[char] = 1;
// 	//     }
// 	//   }
// 	//   for(var i = 0; i < str.length; i++) {
// 	//     if(charCount[str[i]] == 1) {
// 	//       newStr.push(  );
// 	//     }
// 	//   }
// 	//   return newStr.join("");
// 	// }





// // FActorial recursion
// 	// function factorial(x) 
// 	// { 
// 	//   if (x === 0)
// 	//  {
// 	//     return 1;
// 	//  }
// 	//   return x * factorial(x-1) 
// // }
// // alert(factorial(4));





// // Sum of multiples of 3 and 5
	
// 	// var resultado = 0;
// 	// for (var i = 1; i < 1000; i++) {
// 	//     if (((i % 3) === 0) || ((i % 5) === 0)) {
// 	//         resultado += i;
// 	//     }
// 	// }
// 	// console.log(resultado);
	



// // Fibonacci Sequence




  

// 	// while(resultado < 1000000000000000) {
// 	// 	if((resultado % 2) === 0){
// 	// 		suma += resultado;
// 	// 	}
// 	// 	resultado = num1 + num2; 
// 	// 	num2 = num1;   
// 	// 	num1 = resultado; 
// 	//   console.log(resultado)
// 	// }
// 	// console.log(resultado)

// // function fibonacci(num) {
// // 	var	suma = 0,
// // 	num1 = 1,
// // 	num2 = 1;
// // 	for (var resultado = 0; resultado < 1000000000000000; ++resultado) {
// // 			if((resultado % 2) === 0){
// // 				suma += resultado;
// // 			}
// // 			resultado = num1 + num2; 
// // 			num2 = num1;   
// // 			num1 = resultado;
// // 			console.log(resultado) 
// // 			if(num <= resultado) {

// // 				console.log("Hello " + resultado );
// // 				break;
// // 			}
// // 	}
// // }



// // fibonacci(4000);



// // Prime Factorization
// 	/*
// 	var originalTarget = 600851475143;
// 	var target = originalTarget;
// 	var i = 2;
// 	while(i<target) {
// 		while(target%i === 0) {		
// 			(function(newtarget) {		
// 				target = newtarget;	
// 			})(target / i)
// 		}
// 		i++;
// 	}
// 	console.log(target);*/


// // function fibonacci(n) {
// //    if (n < 2){
// //      return 1;
// //    }else{
// //      return fibonacci(n-2) + fibonacci(n-1);
// //    }
// // }


// // function fibonacciInput(input){
// // 	var next = input + 1,
// // 	back = input - 1,
// // 	result = fibonacci(input);

// // 	// console.log("The last num is " + fibonacci(back) + " input " + fibonacci(input) + " next num is " + fibonacci(next));
// // 	console.log(result)
// // }

// // // //Returns 21
// // fibonacciInput(7);
// //Object Oriented example
// 	/*function person(first, last, age, eye) {
// 	    this.firstName = first;
// 	    this.lastName = last;
// 	    this.age = age;
// 	    this.eyeColor = eye;
// 	}
// 	person.prototype.bio = function() {
// 	    return this.firstName + " " + this.lastName
// 	};
// 	var myFather = new person("John", "Doe", 50, "blue");
// 	var resultado = document.getElementById("resultados").innerHTML = "My father is " + myFather.bio(); */



// // Cambio de orden String
// // function changeVowel(phrase) {
// //   var noString = "Please write a String";
// //   if ( typeof phrase != typeof noString) {
// //     console.log(noString);
// //   } else {
// //  		var phraseArr = phrase.split(""),
// //       vowels = "aeiou".split(""),
// //       newArr = [],
// //       k = 0;
// //   for (j = 0; j < phraseArr.length; j++) {
// //     for (i = 0; i < vowels.length; i++) {
// //     	if ( phraseArr[j] === vowels[i]) {
// //         newArr.unshift(vowels[i]);
// //     	}
// //     }
// //   }
// //   console.log(newArr)
// //   for (var j = 0; j < phraseArr.length; j++) {
// //   	for (var i = 0; i < vowels.length; i++) {
// //   		if(phraseArr[j] === vowels[i]) {
// //   			phraseArr.splice(j, 1, newArr[k++]);
// //         break
// //   		}
// //   	}
// //   }
// //   console.log(phraseArr.join(""));
// //   }
// // }
// // changeVowel("puto");



// //Check if i s capitalized

// // function checkUpperCase(str) {
// // 	var phrase = str.split("")
// // 	if (phrase[0] === phrase[0].toUpperCase()) {
// // 		console.log("Is Upper Case")
// // 	} else {
// // 		console.log("Is Lower Case")
// // 	}
// // 	// console.log(str.toUpperCase())
// // }
// //  checkUpperCase("Hello");



// // Check if is credit card

// // function crediCart(credit) {
// //   var target = credit.split("");
// //   if (target.length < 16) {
// //   	console.log("Inserte numero faltante")
// //   } else if (target.length > 16){
// //   	console.log("borre numero sobrante")
// //   } else {
// //   	console.log("chingo")
// //   }
// // }

// // crediCart("8888788888888888");



// //Coding chanllenge Replace count word

// // var firstWord = "Wize",
// //     secondWord = "Services",
// //     fullWord= "WizeServices";

// // // for (var i = 0; i <= 100; i++) {
// // //   if(((i % 3)=== 0) && ((i % 5) === 0)){
// // //     console.log(fullWord);
// // //     continue;
// // //   } else if((i % 3)=== 0) {
// // //     console.log(firstWord);
// // //     continue;
// // //   } else if((i % 5)=== 0) {
// // //     console.log(secondWord);
// // //     continue;
// // //   } 
// // //     console.log(i);
// // // }
// // var i = 0;

// // while ( i <= 100 ) {
// // 	i++
// // 	if(((i % 3)=== 0) && ((i % 5) === 0)){
// //         console.log(fullWord);
// //         continue;
// //     } else if((i % 3)=== 0) {
// // 	    console.log(firstWord);
// // 	    continue;
// // 	}
// // 	console.log(i)
	
// // }


// // document.body.appendChild(document.createTextNode(fibonacci(12)));

// // function fibonacci(n){
// //   if(n<=1)
// //     return n;
// //   else
// //     return fibonacci(n-1) + fibonacci (n-2);  
// // }


