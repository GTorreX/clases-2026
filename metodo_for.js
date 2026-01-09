/*for (variable; condicion; incremento){
    codigo a ejecutar
}*/

let list = ["eat", "sleep", "code", "repeat"]

for (let i = 0; i < list.length; i++){
    console.log(list[i])
}


let canasta = ["manzana", "pera", "naranja", "mango"]
for (fruta of canasta){
    console.log(fruta)
}


const listaDeCompras = {
    manzana: 5,
    pera: 3,
    naranja: 2,
    uva: 8
}

/*for (fruta in listaDeCompras){
    console.log(fruta)
}*/

for (fruta in listaDeCompras){
    console.log(`${fruta} : ${listaDeCompras[fruta]}`)
}

let contador = 0
while (contador < 10){
    console.log(contador)
    contador++
}

let contador2 = 0
do{
    console.log(contador2)
    contador2++
} while (contador2 < 10)