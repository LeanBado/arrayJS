/*
El método some() comprueba si al menos un elemento del array cumple con la condición implementada por la función proporcionada.
some() ejecuta la función callback una vez por cada elemento presente en el array hasta que encuentre uno donde callback retorna 
un valor verdadero (true). Si se encuentra dicho elemento, some() retorna true inmediatamente. Si no, some() retorna false.
callback es invocada sólo para los índices del array que tienen valores asignados; no es invocada para índices que han sido
borrados o a los que nunca se les han asignado valores.
sintaxis:
callback es invocada con tres argumentos: el valor del elemento, el índice del elemento, y el objeto array sobre el que se itera.
arr.some(callback(element[, index[, array]])[, thisArg])
CALLBACK: Función que verifica cada elemento, toma tres argumentos:
ELEMENT: El elemento actual siendo procesado en el array.
INDEX OPCIONAL: El índice del elemento del array que se está procesando.
ARRAY OPCIONAL: El array sobre el que ha sido llamada la función some().
THIS OPCIONAL:Valor a usar como this cuando se ejecute callback.
*/
/* debes retornar true si dentro de los números de ese array al menos uno es un número par */

function buscador(arr){
    return arr.some(item => item % 2 == 0)
}
const rta = buscador([1, 3, 5, 7, 8, 11]);

console.log(rta)

/* Dado un array de string que son nombres de cartas de poker debes retornar la palabra "AS" si dentro de tu baraja tienes un "AS" y un false si no lo tienes. */

function busca(cartas, query){
    if(cartas.some(item=> item == query.toLowerCase())){
        return "AS"
    }else return false
    
}

const a =busca(['diamonds', 'hearts', 'poker'], 'AS');
console.log(a)

