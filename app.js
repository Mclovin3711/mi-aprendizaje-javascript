//declarar variables

let nombre = "kevin"; //variable que puede cambiar

const dni = 12345678; //variable que no puede cambiar

let verdaddices = true; //variable booleana

let nada ;//variable declarada pero sin valor

let vacio = null; //variable nula


let profe = "kevin";
let alumno = profe
profe = "jose";
alumno = "patrick";
console.log(profe);
console.log(alumno);
//tipo de datos

console.log(typeof nombre);

console.log(typeof dni);

console.log(typeof verdaddices);

console.log(typeof nada);

console.log(typeof nulo);

//operadores
let a=7
let b=2

console.log(a + b);  // 7
console.log(a - b);  // 3
console.log(a * b);  // 10
console.log(a / b);  // 2.5
console.log(a % b);  // 1
console.log(a ** b); // 25 (5^2)

//operadores de comparacion
//es igual ==
let num=10;
let num2=20;
console.log(num == num2); //false
//es estricatamente igual ===
let num3=10;
let num4="10";
console.log(num3 === num4); //false
//es diferente !=
let num5=10;
let num6=20;
console.log(num5 != num6); //true

//operadores logicos
//and &&
let x= 10;
let y= 20;
let z=30;
//saber si x es mayor que y y mayor que z
let respuesta = (x > y) && (x > z);
console.log(respuesta); //false
//or ||
let respuesta2 = (x > y) || (x > z);
console.log(respuesta2); //false

//operadores unarios
let constante=10;
constante++;
console.log(constante); //11

//operadores ternarios
let edad1=10;
let edad2=20;
let edad3= edad1 > edad2 ? "es mayor" : "es menor";
console.log(edad3); //es menor

//type coercion
let num7=10;
let num8="20";  //string
console.log(num7 + num8); //1020    
console.log(num7 - num8); //10-20 = -10

// Estructuras de control
//if-else
//se usa para tomar decisiones
// si eres mayor de edad y menor de 65 años puedes venir a la fiesta
let edad = 80;
let invitado = "Kevin";

if (edad >= 18 && edad < 65) {
    console.log(invitado + " puedes venir a la fiesta");
} else {
    console.log(`${invitado} no puedes venir a la fiesta`); // Usamos comillas invertidas
}

//condicionales muiltiples
//switch
//el switch se usa cuando tienes muchas condiciones
let personalidad = "introvertido";
switch(personalidad){
    case "introvertido":
        console.log("eres una persona reservada");
        break; //si eso se cumple se sale del switch y se omite el resto
    case "extrovertido":
        console.log("eres una persona extrovertida");
        break;
    default:
        console.log("no se que tipo de persona eres");
        break;
}

//ciclos o bucles o loops
//for
//se usa cuando sabes cuantas veces se va a repetir
//porcion de codigo que se repiten varias veces
//for(inicializacion; condicion; incremento)
for (let i = 0; i < 5; i++) {
    console.log("i");
}


let j= "beto";
for (let x = 0; x < j.length; x++) {
    console.log(j[x]);
}


//while
//se usa cuando no sabes cuantas veces se va a repetir
let juguetes = 10;

while(juguetes > 0){
    console.log("tengo " + juguetes + " juguetes", "nos quedan", (juguetes-1));
    juguetes--;
}

//funciones
//declaracion de mu funcion saludar
function saludar(){
    console.log("hola, muy buenos dias");
}
//llamada a la funcion
saludar(); //hola, muy buenos dias

//funcion con parametros
let nombre3 = "Fer";
function saludar2(nombre3){
    console.log("hola " + nombre3);
}

saludar2(nombre3); //hola Fer   

//funcion con parametros
function saludar3(nombre4){
    console.log("hola " + nombre4);
}
 saludar3("Juan"); //hola Juan

//funcion con retorno
function obtenerNombreCompleto(nombre5, apellido5){
    return nombre5 + apellido5; //cuando ejecuta el return se sale de la funcion
}

obtenerNombreCompleto("Juan", "Perez");
console.log(obtenerNombreCompleto("Juan", "Perez")); //Juan Perez

//una funcion puedo almacenarla en una variable
let sumar = function(a, b){
    return a + b;
}
console.log(sumar(5, 10)); //15


//funciones anonimas
//una funcion que no tiene nombre
//se usa para eventos
const suma = function(a, b) {
    return a + b;
};

console.log(suma(3, 5)); // Resultado: 8

//scope
//alcance de las variables
//variables globales y locales
let nombre6 = "Kevin"; //variable global
function saludar4(){
    let nombre6 = "Juan"; //variable local
    console.log("hola " + nombre6);
}


//funciones flecha o arrow functions =>
//solo sirve para funciones anonimas
//se usa para simplificar la sintaxis
//no se usa la palabra function
//no se usa la palabra return
const sumar2 = (a, b) => a + b; // si es una sola linea se puede omitir las llaves
//si es mas de una linea se debe usar llaves
//el return esta puesto en ves de la flecha

//SI USA UN PARAMETRO SE PUEDE OMITIR LOS PARENTESIS
const cuadrado = a => a * a;


//arrays
//es una coleccion de elementos
let numeros = [1, 2, 3, 4, 5]; console.log(numeros); // [1, 2, 3, 4, 5]
let colores = ["rojo", "azul", "verde"]; console.log(colores); // ["rojo", "azul", "verde"]

//acceder a un elemento
console.log(numeros[0]); // 1
console.log(colores[1]); // azul
//modificar un elemento 
colores[1] = "amarillo";
console.log(colores); // ["rojo", "amarillo", "verde"]
//agregar un elemento //push
colores.push("azul");
console.log(colores); // ["rojo", "amarillo", "verde", "azul"]
//eliminar un elemento //pop
colores.pop();
console.log(colores); // ["rojo", "amarillo", "verde"]
//saber la cantidad de elementos //length
console.log(colores.length); // 3
//slice //corta un array
let amigos = ["Pedro","Grabiel","Juan", "Daniel"]
let dato = amigos.slice(0 , 2) //que me parte desde la posicion 0 hasta antes de la posicion 2
console.log(dato) // output: [Pedro, Grabiel]
console.log(amigos) // output: [Pedro, Grabiel, Juan, Daniel]

//Foreach
//sirve para hacer algo con cada elemento del array
//no devuelve un nuevo array
//recorre 
let frutas = ["manzana", "pera", "uva", "sandia"];
frutas.forEach(function(fruta){
    console.log(fruta);
});

//tambien es asi:
let frutas2 = ["manzana", "pera", "uva"];
let dato4= frutas.forEach(fruta => console.log(frutas2));
console.log(dato4); // ["manzana", "pera", "uva"]

//.map
//sirve para modificar los elementos de un array
//devuelve un nuevo array
let numeros9 = [1, 2, 3, 4, 5];
let numerosDuplicados = numeros9.map(function(numero){
    return numero * 2;
});

console.log(numerosDuplicados); // [2, 4, 6, 8, 10] 
console.log(numeros9); // [1, 2, 3, 4, 5]

//tengo unos numeros y quiero que me devuelva los numeros mayores que 20
let numeros10 = [10, 20, 30, 40, 50];
let nuevoarray= [];
numeros10.map(num => {
    if(num > 20){
        nuevoarray.push(num);
    }
});

console.log(nuevoarray); // [30, 40, 50]

//.filter
//sirve para filtrar los elementos de un array
//devuelve un nuevo array
//no modifica el array original
//recibe una funcion que devuelve un booleano(true o false)
let numeros11 = [10, 20, 30, 40, 50];
let datonuevo= numeros11.filter( numero => numero > 20);
console.log(datonuevo); // [30, 40, 50]

//find
//sirve para encontrar un elemento de un array
//devuelve el primer elemento que cumpla la condicion
//si no encuentra nada devuelve undefined
let numeros12 = [10, 20, 30, 40, 50];
let dato5 = numeros12.find(numero => numero > 20);  
console.log(dato5); // 30

//includes
//sirve para saber si un elemento esta en un array
//devuelve un booleano
let numeros13 = [10, 20, 30, 40, 50];
let dato6 = numeros13.includes(30);
console.log(dato6); // true

//some
//sirve para saber si algun elemento cumple una condicion
//devuelve un booleano
let numeros14 = [10, 20, 30, 40, 50];
let dato7 = numeros14.some(numero => numero > 20);
console.log(dato7); // true

//every
//sirve para saber si todos los elementos cumplen una condicion
//devuelve un booleano
let numeros15 = [10, 20, 30, 40, 50];
let dato8 = numeros15.every(numero => numero > 20);
console.log(dato8); // false

//manipulando strings
//split
//sirve para convertir un string en un array
let mensaje = "hola como estas";
let palabras = mensaje.split(" ");
console.log(palabras); // ["hola", "como", "estas"]

//searh
//sirve para buscar una palabra en un string
//devuelve la posicion donde se encuentra la palabra
let mensaje2 = "hola como estas";
let posicion = mensaje2.search("como");
console.log(posicion); // 5

//toLowerCase
//sirve para convertir un string en minusculas  
let mensaje3 = "HOLA COMO ESTAS";
let minusculas = mensaje3.toLowerCase();
console.log(minusculas); // hola como estas

//toUpperCase
//sirve para convertir un string en mayusculas
let mensaje4 = "hola como estas";
let mayusculas = mensaje4.toUpperCase();
console.log(mayusculas); // HOLA COMO ESTAS

//objetos
//es una coleccion de propiedades
let persona = {
    nombre: "Kevin",
    edad: 25,
    soltero: true
};

console.log(persona.nombre); // Kevin
//otra forma de acceder a las propiedades
console.log(persona["nombre"]); // Kevin

console.log(persona.edad); // 25
console.log(persona.soltero); // true

//obener todas las propiedades de un objeto
console.log(Object.keys(persona)); // ["nombre", "edad", "soltero"]
//obtener todos los valores de un objeto
console.log(Object.values(persona)); // ["Kevin", 25, true]

//math
//es un objeto que tiene metodos matematicos
console.log(Math.PI); // 3.141592653589793
console.log(Math.abs(-5)); // 5
console.log(Math.ceil(5.1)); // 6
console.log(Math.floor(5.9)); // 5
console.log(Math.round(5.5)); // 6
console.log(Math.random()); // numero aleatorio entre 0 y 1
console.log(Math.round(Math.random() * 10)); // numero aleatorio entre 0 y 10

//date
//es un objeto que tiene metodos para trabajar con fechas
let fecha = new Date();
console.log(fecha); // fecha actual
console.log(fecha.getDate()); // dia actual
console.log(fecha.getMonth()); // mes actual
console.log(fecha.getFullYear()); // año actual
console.log(fecha.getHours()); // hora actual
console.log(fecha.getMinutes()); // minutos actuales
console.log(fecha.getSeconds()); // segundos actuales

