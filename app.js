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