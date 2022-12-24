/* BASICOS */

//Pedir datos con prompt

var nombre = prompt("ingrese su nombre");



/* OPERADORES */

var x = 10
var y = 3

x+y;
x += y;
x*y;

/* CONCATENAR */

saludo1 = "hola"
saludo2 =" como estas?"
nombre = "valen"

saludo1 + saludo2 // Hola como estas?

nomysaludo = `hola soy  ${nombre} y estoy programando` //metodo recomendado

var x = 10
var y = 3

union = x.concat(y); //103 como string
union = "" + x + y ;//103 como string
union = x + y // int 13
