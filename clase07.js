/*
El método find() toma una función de callback y llama a esa función para cada elemento que recorre dentro del arreglo al que está vinculado.
Cuando encuentra una coincidencia (en otras palabras, la función callback devuelve true), el método devuelve ese elemento particular
del arreglo e inmediatamente rompe el bucle. Así que el método find() devuelve el primer elemento dentro de un arreglo que satisface
la función callback. Y NO LO DEVUELVE EN FORMA DE ARREGLO, DEVUELVE EL ELEMENTO COMO SALE DEL ARRAY
*/

const products = [
    {
      name: "Pizza",
      price: 12,
      id: '🍕'
    },
    {
      name: "Burger",
      price: 23,
      id: '🍔'
    },
    {
      name: "Hot dog",
      price: 34,
      id: '🌭'
    },
    {
      name: "Hot cakes",
      price: 355,
      id: '🥞'
    },
    {
        name: "Hot pancakes",
        price: 380,
        id: '🥞'
      },
  ];

  const rta = products.find(producto => producto.price > 100)
  console.log(rta)

  //findIndex devuelve la primera posicion que encuentra (index) del elemento dentro del array, en relación a la funcion que le pasamos.
  const index = products.findIndex(producto => producto.price >100); 
  console.log(index)

  const a = [[1,2,3],1,[4]];
  const b = a.flat()
  console.log(b)

/* Dado un array de strings existe la palabra clave "myKey" y debes retornar la posición dentro del array en donde se encuentra este string y si no está debes retornan un false. */
  

function buscaIndex(arr){
  const aux = arr.findIndex(elemento => elemento =="myKey");
  return aux == -1 ? false : aux
}

const rta4 = buscaIndex(["diamonds", "myKey", "spades", "AS"]);
/* buscaIndex(["diamonds", "hearts", "spades"]);
buscaIndex(["myKey", "hearts", "spades"]); */
console.log(rta4)
