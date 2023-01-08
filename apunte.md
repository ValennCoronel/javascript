# Curso de Javascript

### Especificaciones del lenguaje

- Lenguaje de programacion
- Interpretado en el navegador
- Orientado a objetos
- Imperativo (Las instrucciones van de linea en linea)
- Case sensitiva
- Basado en prototipos /instancias /classless
- Tipado debil (Las variables son flexibles)
- Dinamico (La variable se adapta al dato)

---

## Sintaxis basica

### Incluir js

Existen varias formas de incluir javascript pero la mas recomendada es en un archivo externo .js linkeado a HTML con la siguiente etiqueta

```js
<script src="nombre.js"></script>
```

### Variables y tipos de datos
hay 3 formas de declarar variables **var**  / **const** / **let**

```js
var variable = 3;
const var = 1
let nombre = "pepe"
```
var es la variable por defecto con alcance global, const es una constante y let es una variable con scope (funciona solo en un sector del codigo)

#### Convenciones

En Js se acostumbra a utilizar el cammel case que es escribir las variables con minuscula en la primer palabra y mayuscula en las que siguen, ej. nombreCompleto

#### Tipos de datos

Los mas clasicos son **string**, ***int/float**, **bool**. Tambien contamos con **Null y NAN**

Las vairbles deben ser declaradas (no necesariamente inicializadas), antes de ser usadas.

---

## Operadores

JS cuenta con los operadores clasicos de la mayoria de lenguajes tanto de asignacion como aritmeticos.

Hay operadores que vaian su funcion dependiendo de el tipo de dato. por ej. se puede concatenar strings utilizando +

*Al comparar valores == no interpreta tipo de dato y === si lo hace*

---

## Funciones basicas

#### Prompt
Es una funcion utilizada para pedir datos mediante alertas
```js
var nombre = prompt("ingrese su nombre")
```

#### Write
Es una funcion utilizada para pedir datos mediante alertas

```js
document.write("texto")
```

#### Parse
Es una funcion utilizada para cambiar tipos de datos

```js
cadena = "24" //string
entero = parseint(cadena) //int
```

---

## Convenciones

En Js se acostumbra a utilizar el cammel case que es escribir las variables con minuscula en la primer palabra y mayuscula en las que siguen, ej. **nombreCompleto**

---

## Condicionales
Los condicionales son los clasicos de los lenguajes

```js
if(*condicion*){
    instruccion
} else{

}
```

---

## Arrays

Los arrays son variables que guardan muchos datos 
```js
array = ["valen", 32, "rojo", true]
```

Estos se manejan con el indice igual que en otros lenguajes


### Array asociativo

Este es un array donde los indices se remplazan por nombres
```js
let pc = {
    nombre: "pc casa"
    procesador: "intel i7"
    ram: "16GB"
}
```

---

## Bucles e Iteracion

Los clasicos bucles **while, do while, for, for in, for off**

### for in / of

Podemos iterar dentro de un array
```js
animales = ["gato", "perro", "pajaro"]
for(animal in animales){
    document.write(animal) //muestra las POSICIONES del array (0,1 y 2)
}
```


```js
animales = ["gato", "perro", "pajaro"]
for(animal of animales){
    document.write(animal) //muestra los ANIMALES del array (gato perro y pajaro)
}
```

---

## Funciones
Similar a otros lenguajes
```js
function nombre(parametros){
    instrucciones
}
```

### Funcion flecha
```js
const nombre = (parametro) =>{
    instruccion
}

//formato corto con 1 parametro y una linea

const nombre = parametro => instruccion
```

---

## Programacion orientada a objetos POO

### Conceptos basicos

1. *Clase:* Determina que  objeto se va a construir
2. *Objeto:* Un tipo de elmento que contiene determinados atributos en comun
3. *Constructor:* Determina que atributos va a tener mi objeto
4. *Atributo:* Propiedades de un objeto
5. *Metodo:* Cosas que puede hacer el objeto, funcionalidad
6. *Instanciación:* Hace referencia a la creacion de un objeto

```js
lass animal{ 
    constructor(especie, edad, color){
        this.especie = especie;
        this.edad = edad;
        this.color = color; //atributos
        this.info = `Hola soy ${this.especie}, tengo ${this.edad} y soy de color ${this.color}`;
    } //constructor

    verInfo(){
        document.write(this.info + "<br>")
    } //metodo
} //Clase (contiene al objeto)
```

```js
//crear objeto
let perro = new animal ("Perro", "3", "blanco")
```

```js
//Lamar al metodo
perro.verInfo()
```

## Caracteristicas de la POO
- *Abstraccion:* Se trata de reducir el objeto (atributos y metodos) lo mas posible
- *Modularidad:* Hace referencia a dividir el problema grande en varios mas chicos
- *Encapsulamiento:* Se trata de resguardar los datos para que no sean accesibles por el usuario
- *Polimorfismo:* La capacidad de un objeto de comportarse distinto del resto ante un metodo
  
   