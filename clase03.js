/* array.filter() crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada.

array.filter() llama a la función callback  sobre cada elemento del array, y construye un nuevo array con todos los valores para los cuales
callback devuelve un valor verdadero. callback es invocada sólo para índices del array que tengan un valor asignado.
No se invoca sobre índices que hayan sido borrados o a los que no se les haya asignado algún valor.
Los elementos del array que no cumplan la condición callback  simplemente los salta, y no son incluidos en el nuevo array.

este metodo es inmutable y el nuevo array creado solamente puede contener:
  cero coincidencias
  todas coincidencias
  algunas coincidencias
  Pero nunca más coincidencias que el tamaño del array original.

Valor devuelto: Un nuevo array con los elementos que cumplen la condición. Si ningún elemento cumple la condición, se devolverá un array vacío.
sintaxis: array.filter((element, index) => index >2);
funcion callback: la cual se ejecutará por cada elemento del array y deberá de retornar true para indicar que el elemento actual debe de ser incluido
     en el nuevo array o false en caso contrario.
element: elemento actual que está siendo procesado
index: corresponde a la posición (index) del element dentro del array.

*/

const listadoPersonas = ["valentina", "leandro", "ricardo", "patricia", "ivan", "pato", "luca"];

const rta =listadoPersonas.filter(item => item.length > 4)
console.log(rta)

const orders = [
    {
      customerName: "Nicolas",
      total: 60,
      delivered: true,
    },
    {
      customerName: "Zulema",
      total: 120,
      delivered: false,
    },
    {
      customerName: "Santiago",
      total: 180,
      delivered: true,
    },
    {
      customerName: "Valentina",
      total: 240,
      delivered: true,
    },
  ];

  const rta2 = orders.filter(item => item.delivered)
  console.log(rta2)
  console.log(orders)


/*  filtrar todas las órdenes de compra que cumplan con la condición de tener un total mayor o igual a 100 y además que el estado delivered sea "true".*/
const solution =[
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
];
const rta3 = solution.filter(item =>
  item.total >= 100 && item.delivered)
console.log(rta3)