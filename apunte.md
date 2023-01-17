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
- **Polimorfismo:** La capacidad de un objeto de comportarse distinto del resto ante un metodo
  
## Funcionalidades
**Herencia:** Al crear una clase se puede añadirle todas las propiedades de una clase existente y añadirle nuevas usando *extends*

```js
class perroC extends animal{
    constructor(especie, edad, color, raza){
        super(especie, edad, color);
        this.raza = raza;
    }
}
```
Todo objeto de esta clase va a tener todas las funcionalidades y atributos de la clase animal, sumados a los de la clase perroC (definida asi ya que no se puede tener un objeto con el mismo nombre que la clase) usando **super()**



**Metodos estaticos:**
Al utilizar **static** a la hora de definir un metodo, este funcionara para la clase aunque aun no haya ningun objeto creado

```js
class perroC extends animal{
    constructor(especie, edad, color, raza){
        super(especie, edad, color);
        this.raza = raza;
    }
    static ladrar(){
        alert("WAW")
    }
}
```


**Metodos accesores:** 
Se utilizan **Getters y setters** para modificar los atributos de una clase o obtener los valores establecidos

```js
//metodo de una clase
set setRaza(newName){
    this.raza = newName;
}

get getRaza(){
    return this.raza;
}
```
Luego de declararlos se utilizan asi:

```js
perro.setRaza = golden //cambiamos la raza a golden
document.write(perro.getRaza); //devuelve "Golden" o la raza actual
```

---


## Metodos de cadenas
- **Concat()** Junta dos o mas cadenas y retorna una
- **startsWith()** Si una cadena comienza con los caracteres de otra cadena devuelve true sino false
- **includes()** verifica si una cadena puede encontrarse dentro de otra (devuelve ToF)
- **indexOf()** Devuevle el indice del primer caracter de la cadena y si no existe devuelve -1
- **lasIndexOf()** devuelve el ultimo indice del primer caracter de la cadena y si no existe devuelve -1


- **padStart()** Rellena la cadena al principio con los caracteres deseados
- **padEnd()** idem anterior pero a la inversa
-  **repeat** devuelve la misma cadena pero repetida la cantidad



- **split()**  Divide la cadena como le pidamos
- **substring()** Nos retorna un pedazo de la cadena que selecciona
- **toLowerCase** Convierte la cadena a minuscula
- **toUpperCase()** Convierte la cadena a mayuscula
- **toString()** Devuelve una cadena que representa a un objeto
- **trim()** Elimina los espacios en blanco al principio y al final
- **trimEnd()** Elimina los espacios en blanco al final 
- **trimStart()** Elimina los espacios en blanco al principio
- **valueOf()** Retorna el valor positivo de un objeto string

---

## Metodos de arrays

### Transformadores

- **pop()** Elimina el ultimo elemento del array y lo retorna
- **shift()** Elimina el primer elemento del array y lo retorna
- **push()** Agrega un elemento al final del array
- **reverse()** Invierte los elementos de un array
- **unshift()** Agrega uno o mas elementos al principio de un array y devuele la nueva longitud
- **sort()** Ordena los elementos del array localmente y devuelve el array ordenado (alfabeticamente)
- **splice()** cambia el contenido de un array eliminando elementos existentes y o agregando nuevos

### Accesores

- **join()** Une todos los elementos de una matriz u objeto
- **slice()** Devuelve una parte del array dentro de un nuevo array
- **metodos ya vistos en cadenas (toString(), indexOf(), lastIndexOf(), indcludes() )**

### De repeticion

- **filter()** Crea un nuevo array con todos los elementos que indiques
- **forEach()** Ejecuta la funcion indicada una vez por cada elemento


---

## Objeto math

### Metodos

- **sqrt()** Devuelve la raiz cuadrada de un numero
- **cbrt()** Devuelve la raiz cubica de un numero
- **max()** Devuelve el mayor de cero o mas numeros
- **min()** Devuelve el mas pequeño de cero o mas numeros
- **random()** Devuelve un numero aleatorio entre 0 y 1
- **round()** Devuelve el valor de un numero redondeado al entero mas cercano
- **fround()** Devuelve la representacion flotante de precicion simple mas cercana
- **floor()** Devuelve el mator entero menor o igual que un numero
- **trunc()** Devuelve la parte entera de un numero eliminando la parte fraccionaria
- 
### Propiedades
- **PI** Pi
- **sqrt1_2** Raiz cuadrada de un medio o 1 sobre raiz de 2
- **sqrt2** Raiz de 2
- **E** Constante de euler
- **LN2** Log natural de 2
- **LN10** Log natural de 1o
- **LOG2E** Log de e en base 2
- **LOG10E** Log de e en base 10


---

## Consola de JS

Consiste en usar la consola para resolver problemas, la sintacis es console.funcion()

### Funciones de registro

- **assert()** Aparece un mensaje en consola si la afirmacion es falsa
- **clear()** Limpia la consola
- **error()** Muestra un mensaje de error en la consola
- **info()** Emite un mensaje informatibo en la consola
- **log()** Muestra un mensaje de depuracion (es posible colocar .log("%texto", css, css) para dar estilos)
- **table()** Toma como argumento obligatiorio data (array o objeyo)y muestra una tabla con el indexado
- **warm()** Emite una advertencia
- **dir()** Devuelve el tipo de dato con informacion extra


### Funciones de conteo

- **count()** cuenta cuantas veces se ejecuta una funcion
- **countReset()** Resetea la cuenta

### Funciones de agrupacion

- **group()** Crea un grupo dentro de la consola donde ejecutar codigo
- **groupEnd()** Elimina el grupo
- **GoupCollapsed()** Crea el grupo pero inicia cerrado

### Funciones de temporizacion
- **time()** Inicia un contador de tiempo
- **timeLog()** Muestra el estado del contador
- **timeEnd** Finaliza el contador

