/**.join() sirve para unir todos los elementos de una matriz (o un objeto similar a una matriz) en una cadena y devuelve esta cadena.
 * Si arr.length es 0, se devuelve la cadena vacía.
 * 
 * sintaxis:
 * arr.join([separator])
 * separador Opcional
Es una cadena usada para separar cada uno de los elementos del arreglo. 
El separador es convertido a una cadena si es necesario. Si este se omite, los elementos del arreglo son separados con una coma (","). 
Si el separador es una cadena vacía todos los elementos son unidos sin ningún carácter entre ellos.
 */

const nombre = ["leandro", "martin", "bado"]
const a = nombre.join("-")
console.log(a)
 const nombreCompleto = nombre.join(" ").toUpperCase()
console.log("nombre completo con join", nombreCompleto)
console.log("nombre original array", nombre)

/**
 * El método split() divide un objeto de tipo String en un array (vector) de cadenas mediante la separación de la cadena en subcadenas.
 * Sintaxis: cadena.split([separador][,limite])
 * SEPARADOR: Especifica el carácter a usar para la separación de la cadena. 
 *      El separador es tratado como una cadena o como una expresión regular.
 *      Si se omite el separador, el array devuelto contendrá un sólo elemento con la cadena completa.
 * LIMITE: Opcional. Entero que especifica un límite sobre el número de divisiones a realizar.
 *      El método split() todavía se divide en todas las concordancias del separador, pero divide la matriz devuelta en la cantidad
 *      de elementos impuesta por el limite.
 
 */
const nombreSeparado = nombreCompleto.split(",")
console.log("nombre separado con split", nombreSeparado) 


/* n este desafío vas a recibir el título de un artículo y tú debes transformarlo en un formato de URL en donde normalmente se transforma todo en minúscula y se cambian los espacios por un guion (-), por ejemplo: Curso de arrays => curso-de-arrays

La solución debería tener un input y output como los siguientes:


solution("La API para nunca parar de aprender");
solution("Curso de arrays");

Output

"la-forma-de-correr-python"
"la-api-para-nunca-parar-de-aprender"
"curso-de-arrays" */

function transforma(arr){
    return arr.split(" ").join("-").toLowerCase()
}
const z = transforma("La forma de correr Python");
console.log(z)


/* dos arrays de números como parámetros de entrada y debes retornar un array que tenga los dos arrays unidos. */
function unir(arrayA, arrayB) {
    return arrayA.concat(arrayB)
   }; 

const rta10 = unir([1, 2, 3], [4, 5, 6])
console.log(rta10)