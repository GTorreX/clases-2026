/*switch(expresion){
    case valor1:
        //codigo a ejecutar
        break
    case valor2:
        //codigo a ejecutar
        break
    default:
        //codigo en caso de nada de nada.
} */




let expresion = "manzana"
if(!expresion.endsWith("s")){
    expresion += "s"
}

switch(expresion){
    case "naranjas":
        console.log("Las naranjas cuestan $20 pesos el kl")
        break
    case "manzanas":
        console.log("las manzanas cuestan $43 pesos el kl")
        break
    case "platanos":
        console.log("Los platanos cuestan $20 pesos el KL")
        break
    case "mangos":
    case "papayas":
        console.log("Los mangos y las papayas cuestan $25 pesos el KL")
        break
    default:
        console.log("Lo sentimos, no tenemos " + expresion + " disponible")
}

console.log("¿Deseas algo mas?")