/* Para tomar un array y aplicarle algun procedimiento que devuelva otro array con la misma cantidad de elementos que el original se puede usar el metodo .map
En lugar de iterar manualmente sobre el arreglo usando un bucle, puedes simplemente usar el método incorporado Array.map().
El método Array.map() te permite iterar sobre un arreglo y modificar sus elementos utilizando una función callback. La función callback se ejecutará entonces en cada uno de los elementos del arreglo.
.map() es INMUTABLE por lo tanto no modifica el array original, sino que crea uno nuevo con la “transformación” aplicada.
sintaxis: arr.map(function(element, index, array){  }, this); 
 */
const productos = [
    {nombre: "Pizza",
    precio: 100,
},
    { nombre: "tarta",
    precio: 140,
}]
const div = document.getElementById("app");
const listado = productos.map(elemento =>{
    return `<li>${elemento.nombre}: $${elemento.precio}.-</li>`
});
div.innerHTML = listado.join("")