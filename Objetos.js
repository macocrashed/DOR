<script>
  
    //1- Definir y crear un objeto simple utilizando literal
    var persona1 = {
        nombre = "Oscar",//Nombre valor
        apellido = "ROdriguez",//apellido valor
        dni = "123411321F",
        edad =15

    };
    //2-Definir y crear un objeto simple utilizando new
    var persona2 = new OBject();
    persona2.nombre= "Ozi";
    persona2.apellido= "gabr";
    persona2.dni= "23565545D";
    persona2.edad= 15;
    //3-Definir un constructor
    function Persona(nom, ap, dn, ed){
        this.nombre = nom;
        this.apellido = ap;
        this.dni = dn;
        this.edad = ed;
    }
    //Propiedades: Acceder a las propiedades de un objeto
    alert (persona1.nombre);
    alert (persona2["apellido2"]);
    alert (persona1[expresion]);
    alert(Object.values(persona3));
    alert(Object.keys(persona3));

    //Propiedades: Recorrer las prpiedades de un objeto
    document.write("Recorrer propiedades obvjeto persona")
    //Propiedades: Borrar la propiedad de un objeto
    document.write("br"+ "br"+"Borrar una propiedad al objeto persona1"+ "br" );
    delete persona1.delete
    //Metodos: Crear un metodo de un objeto.
    document.write("br"+ "br"+"Crear un metodo al objeto persona1"+ "br" );
    var persona4 = {
        nombre: "marta",
        apellido: "guerrero",
        dni: "276232364823S",
        edad: 23,
        nombreCompleto:function(){
            return this.nombre+" "+this.apellido;
        }

    }
    //Ver prpoiedades de un objeto
    //OBJETOS ANIDADOS

    //1-dwefinir y crear un objeto simple utilizando literal
    var pelicula1={
        titulo:"AVatar",
        director:{
            nombre:"James",
            apellido: "Cameron"
        }
    }
    document.write("OBjetos anidados");
    document.write("El nombre del director es: "+pelicula1.director.nombre);
    document.write("El apellido del director"+pelicula1["director"].apellido+" ");
    //Progrmacion basada en prototipos. 
    const array=[1,2,3,4];
    //Prototipo: Creacion de prototipo de un objeto usando un constructor(clase)
    function Humano(nom, ap, dn, ed){
        this.nombre = nom;
        this.apellido = ap;
        this.dni = dn;
        this.edad = ed;
    
    this.nombreCompleto=function(){
    return this.nombre+" "+this.apellido;
    }
    }
    var humano1 = new Humano("luis", "Suarez", "12434132G", 32);
    var humano2 = new Humano("jorge", "martin", "124325132G", 12);
    //se añaden propiedades o metodos al objeto humano1
    humano1.nacionalidad = "Española";
    //1-Directamente en el prototipo o constructor
    Humano.prototype.muerte = 80;
    Humano.prototype.tiempoVida = function(){return this.muerte-this.edad};
    document.write("Añadir metodo aun prototipo");
    document.write(humano2.muerte);
    document.write("Tiempo de vida de martin es de "+ humano2.tiempoVida()+" años");
    for(x in humano2){
    document.write([x + " "])
    }
    //Herencia simple
    function Animal(oj, pel){
        this.ojos = oj
        this.pelo = pel
        this.correr = function(){
            console.log("corriendo... ");
        }
        
    }
    function Perro (apo, oj, pel){
        this.apodo = apo;
        Animal.call(this, oj, pel);
    }


</script>
