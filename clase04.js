/* 
El método reduce() ejecuta una función reductora sobre cada elemento de un array, devolviendo como resultado un único valor.
sintaxis: array.reduce(callback(acumulador, valorActual[, índice[, array]])[, valorInicial])
CALLBACK: Función a ejecutar sobre cada elemento del array (excepto para el primero, si no se proporciona valorInicial), que recibe cuatro parámetros:
ACUMULADOR: acumula el valor devuelto por la función callback. Es el valor acumulado devuelto en la última invocación de callback, o el valorInicial, si se proveyó.
VALORACTUAL:El elemento actual que está siendo procesado en el array.
INDICE OPCIONAL: El índice del elemento actual que está siendo procesado en el array. Empieza desde el índice 0 si se provee valorInicial. En caso contrario, comienza desde el índice 1.
*/


/* Tienes un array de números y debes retornar la suma de todos los valores en él. */
function sumador(arrNumeros){
    return arrNumeros.reduce((nro, item) =>
        nro + item
    ,0)
}

const a = sumador([1, 1, 1]);
//solution([2, 4, 8]);
console.log(a)


/*retornar la suma total de todas las órdenes de compra.
*/
function sumaTotal(arr){
    return arr.reduce((acum, total)=>
    acum + total.total
    ,0)
}
const RTA = sumaTotal([
  {
    customerName: "Nicolas",
    total: 100,
    delivered: true,
  },
  {
    customerName: "Zulema",
    total: 120,
    delivered: false,
  },
]);
console.log(RTA)



const listado = [1,3,3,2,2,1,7,6,8];
const listadoReduce = listado.reduce((obj, item) =>{  
    if(!obj[item]){
        obj[item] = 1;
    } else{      //como minimo a cada elemento iterado le va a poner el valor 1, si lo vuelve a encontrar al valor anterior le suma otro 1
        obj[item] += 1;
    }
    return obj
},{}); 
console.log(listadoReduce)

const list = [1,2,3,4,5,6,7,8,9,10]
//cuantos valores hay de 1 a 5, cuantos de 6 a 8 y cuantos de 9 a 10

const rta = list.reduce((obj, item) =>{
    if (item <=5){
        obj["1-5"] += 1;
    } else if(item > 5 && item <=8){
        obj["6-8"] += 1;
    } else if(item > 8 && item <=10){
        obj["9-10"] += 1;
    }
    return obj
},{
    "1-5": 0,
    "6-8": 0,
    "9-10": 0, 
})

console.log(rta)

