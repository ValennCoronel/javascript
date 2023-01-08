class animal{ 
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


//crear objeto
let perro = new animal ("Perro", "3", "blanco")

//Lamar al metodo

perro.verInfo()