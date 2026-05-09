const fuente = "confiable";
let informacionverificada = true;

if (fuente != "confiable"){
    console.log ("la informacion no puede compartirse");
} else {
    console.log ("la informacion puede compartirse");
}


function esMayorDeEdad(Edad) {
    if (Edad >= 18) {
        return true;
    } else { 
        return false;   
    }
}

if(esMayorDeEdad(80)) { 
    console.log("la persona es mayor de edad.");
} else{
    console.log("la persona NO es mayor de edad");
}

function ladrar(){
    console.log("guau");
}

ladrar ()
ladrar ()
ladrar ()

function maullar () {
    console.log("miau");
}
  
ladrar ()
maullar ()
maullar ()
maullar ()
ladrar ()

let Resultado = esMayorDeEdad (2);
console.log ("Es mayor de edad??" + Resultado);