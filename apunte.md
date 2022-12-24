#Curso de Javascript

###Especificaciones del lenguaje

-Lenguaje de programacion
-Interpretado en el navegador
-Orientado a objetos
-Imperativo (Las instrucciones van de linea en linea)
-Case sensitiva
-Basado en prototipos /instancias /classless
-Tipado debil (Las variables son flexibles)
-Dinamico (La variable se adapta al dato)


---
##Sintaxis basica

###Incluir js

Existen varias formas de incluir javascript pero la mas recomendada es en un archivo externo .js linkeado a HTML con la siguiente etiqueta
~~~
<script src="nombre.js"></script>
~~~

###Variables y tipos de datos
hay 3 formas de declarar variables **var**  / **const** / **let**

~~~
var variable = 3;
const var = 1
let nombre = "pepe"
~~~
var es la variable por defecto con alcance global, const es una constante y let es una variable con scope (funciona solo en un sector del codigo)

####Convenciones

En Js se acostumbra a utilizar el cammel case que es escribir las variables con minuscula en la primer palabra y mayuscula en las que siguen, ej. nombreCompleto

####Tipos de datos

Los mas clasicos son **string**, ***int/float**, **bool**. **Tambien contamos con Null y NAN**

Las vairbles deben ser declaradas (no necesariamente inicializadas), antes de ser usadas.

---

##Operadores

JS cuenta con los operadores clasicos de la mayoria de lenguajes tanto de asignacion como aritmeticos.

Hay operadores que vaian su funcion dependiendo de el tipo de dato. por ej. se puede concatenar strings utilizando +

*Al comparar valores == no interpreta tipo de dato y === si lo hace*

---

##Basicos

####Prompt
Es una funcion utilizada para pedir datos mediante alertas
~~~
var nombre = prompt("ingrese su nombre")
~~~

####Write
Es una funcion utilizada para pedir datos mediante alertas

~~~
document.write("texto")
~~~

####Parse
Es una funcion utilizada para cambiar tipos de datos

~~~
cadena = "24" //string
entero = parseint(cadena) //int

~~~

---

##Convenciones

En Js se acostumbra a utilizar el cammel case que es escribir las variables con minuscula en la primer palabra y mayuscula en las que siguen, ej. nombreCompleto

---

##Condicionales
Los condicionales son los clasicos de los lenguajes

~~~
if(*condicion*){
    instruccion
} else{

}
~~~

---

##Arrays

Los arrays son variables que guardan muchos datos 
~~~
array = ["valen", 32, "rojo", true]
~~~

Estos se manejan con el indice igual que en otros lenguajes


###Array asociativo

Este es un array donde los indices se remplazan por nombres
~~~
let pc = {
    nombre: "pc casa"
    procesador: "intel i7"
    ram: "16GB"
}
~~~

---

##Bucles e Iteracion

Los clasicos bucles **while, do while, for, for in, for off**

###for in / of

Podemos iterar dentro de un array
~~~
animales = ["gato", "perro", "pajaro"]
for(animal in animales){
    document.write(animal) //muestra las POSICIONES del array (0,1 y 2)
}
~~~~~~
animales = ["gato", "perro", "pajaro"]
for(animal in animales){
    document.write(animal) //muestra las POSICIONES del array (0,1 y 2)
}
~~~

~~~
animales = ["gato", "perro", "pajaro"]
for(animal of animales){
    document.write(animal) //muestra los ANIMALES del array (gato perro y pajaro)
}
~~~

---

##fuciones
Similar a otros lenguajes
~~~
function nombre(parametros){
    instrucciones
}
~~~

Funcion flecha
~~~
const nombre = (parametro) =>{
    instruccion
}

//formato corto con 1 parametro y una linea

const nombre = parametro => instruccion
~~~