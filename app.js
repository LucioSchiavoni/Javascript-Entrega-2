
let capital
let porcentaje
let apalancamiento


do {
    capital = parseInt(prompt("Ingrese su capital a invertir"))
    porcentaje = parseInt(prompt("Ingrese su porcentaje de ganancia"))
    apalancamiento = parseInt(prompt("Ingrese su apalancamiento"))

if( apalancamiento > 20){
    alert("Su apalancamiento es demasiado riesgoso, use un apalancamiento menor a 20")
    
}




} while (isNaN(capital) || isNaN(porcentaje) || isNaN(apalancamiento));


function operacion(){
const operacion =  ((porcentaje*apalancamiento)*capital)/100
console.log("su ganancia de inversion fue de " +operacion +" Usd con un apalancamiento de "+apalancamiento +"x" )
}

operacion();
