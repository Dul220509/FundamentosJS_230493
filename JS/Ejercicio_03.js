//String cadena de caracteres 

console.warn("Tipo de datos ---STRING--- (Cadena de caracteres)");

const alumno = "Dulce Yadira Salvador Antonio"
let producto = "MONITOR DE 28\"";

console.log(`El nombre del alumno es: ${(alumno)}, que es tipo de dato ${typeof(alumno)}`);
producto= "MONITOR DE 28\"";
console.log(`El nombre del producto es ${(producto)}, que es un tipo de dato ${typeof(producto)}`);

//Manipulando los strings

console.log(`Mas adelante podremos manipular el contenido de  los STRINGS usando funciones 
    específicas como convertir a mayúsculas: ${alumno} => ${alumno.toUpperCase()}`);
    //toUpperCase convierte a mayusculas los datos strings

console.log(`O en su defecto a minúsculas: ${producto} => ${producto.toLowerCase()}`);
    //toLowerCase convierte a minusculas los datos de tipo string



    console.warn("Tipo de datos -----BIG INT---- (Numeros grandes asta 19 digitos en total )");


    const numeroGrande = 1234567890
    const numeroGrande2 = 12345678901234567890
    const numeroGrande3 = 12345678901234567890123456789
    const numeroGrande4 = 1234567890123456789012345678901234567890
    
    console.log(`El primer experimento de un número grande es: ${numeroGrande}, que sí es soportado por NUMBER y su tipo de dato es: ${typeof(numeroGrande)}`);
    console.log(`El Segundo experimento de un numero grande es: ${numeroGrande2}, que si es soportado por NUMBER y su tipo de dato es: ${typeof(numeroGrande2)}`);
    console.log(`El tercer experimento de un numero grande es: ${numeroGrande3}, que si es soportado por NUMBER y su tipo de dato es: ${typeof(numeroGrande3)}`);
    console.log(`El cuarto experimento de un numero grande es: ${numeroGrande4}, que si es soportado por NUMBER y su tipo de dato es: ${typeof(numeroGrande4)}`);

// const numero ="38"
// const numero2 =38

//console.log(typeof numero)
//console.log(typeof numero2)

//BigInt
//const numeroGrande = (9956254542121545124543658436546456563)
//console.log(typeof numeroGrande)

//const numero =10
//const numero2 = 20
//console.log(numero +Number(numeroGrande))


//const numero ="30"
//const numero2 = 30

//console.log(typeof String(numero2))
//console.log(typeof Number(numero))

//Symbol

//const primerSymbol = Symbol(30)
//const segundoSymbol = Symbol(30)

//console.log(primerSymbol=== segundoSymbol)
//console.log(primerSymbol.valueOf())

///null
//const descuento=null
//console.log(typeof descuento)
