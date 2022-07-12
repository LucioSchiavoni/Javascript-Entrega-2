class Orden{
    constructor(nombre = "Predeterminado", monto = 1, porcentaje = 1, apalancamiento = 1, operacion = 1) {
        this.nombre = nombre
        this.monto = monto
        this.porcentaje = porcentaje
        this.apalancamiento = apalancamiento
        this.operacion = operacion
       
    }
}

let nombre, monto, porcentaje, apalancamiento, respuesta
do{
do {
    nombre = prompt("Ingrese el nombre donde va a invertir").toLowerCase()
    monto = parseInt(prompt("Ingrese su monto a invertir"))
    porcentaje = parseInt(prompt("Ingrese su porcentaje de ganancia"))
    apalancamiento = parseInt(prompt("Ingrese su apalancamiento del 1 al 20"))

if( apalancamiento > 20){
    alert("Su apalancamiento es demasiado riesgoso, use un apalancamiento menor a 20")
}else {
    operacion();
}

} while ((isNaN(capital) || isNaN(porcentaje)  || isNaN(apalancamiento)))


function operacion(){
    const operacion =  ((porcentaje*apalancamiento)*monto)/100
    alert("su ganancia de inversion fue de " +operacion +" Usd con un apalancamiento de "+apalancamiento +"x" )
}
///continuar 
do{
    respuesta = parseInt(prompt("Ingrese 1 para buscar una orden, 2 para ordenar de mayor a menor gananica"))
}while(respuesta < 1 || respuesta > 2)
}while(isNaN(respuesta))

switch(respuesta){
    case 1:
        buscarOrdenes(ordenes)
    break
    case 2:
        filtrarOrdenes(ordenes)
    break
    default:
        alert("Opcion no valida")
        break
}
 
const ordenes = []
mts = 1000
///////////Array //////////
function buscarOrdenes(ordenes){
    let nombreOrdenes = prompt("Ingrese nombre de inversion")
    let nombreBuscado = ordenes.find(ordenes => ordenes.nombre == nombreOrdenes)

    if( nombreBuscado == undefined){
        alert("No se encuentra")
    } else 
        alert(nombreBuscado)
    }

buscarOrdenes();


function OrdenarOrdenes(ordenes){
    alert(ordenes.sort((a,b) => b.operacion-a.operacion))
}
(OrdenarOrdenes);





    
    


