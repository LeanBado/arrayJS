/*
array.every(): Determina si todos los elementos en el array satisfacen una condición.
El método every ejecuta la función callback dada una vez por cada elemento presente en el 
arreglo hasta encontrar uno que haga retornar un valor falso a callback (un valor que resulte falso cuando se convierta a booleano).
Si no se encuentra tal elemento, el método every de inmediato retorna  false.
O si  callback retorna verdadero para todos los elementos, every retornará true. callback es llamada sólo para índices del arreglo que
tengan valores asignados; no se llama para índices que hayan sido eliminados o a los que no se les haya asignado un valor.
sintaxis:
arr.every(callback(element[, index[, array]])[, thisArg])
currentValue (required): El elemento actual del arreglo que está siendo procesado.
index Opcional: El índice del elemento actual del arreglo que está siendo procesado.
array Opcional: El arreglo sobre el cual fue llamado every.
thisArg Opcional: Valor por usar como this cuando se ejecute callback.
*/ 

const listado = [
    {
      name: "Nicolas",
      age: 12,
    },
    {
      name: "Andrea",
      age: 8,
    },
    {
      name: "Zulema",
      age: 2,
    },
    {
      name: "Santiago",
      age: 18,
    },
  ];

const rta = listado.every(elemento => elemento.age >=18);
console.log(rta)