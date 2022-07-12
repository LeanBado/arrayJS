/*
.includes() sirve para ver si una cadena (string) existe dentro de otra.-
sintaxis:
str.includes(search-string, optional-position)
El parámetro search-string es la cadena que estás buscando dentro de una cadena a la que hace referencia la variable str.
El parámetro position es un número opcional para indicar a partir de cuál posición de str queremos buscar nuestra cadena. Si se omite este parámetro se asume un valor por defecto de cero.
*/

const animales = ["perro", "gato", "hamster", "dinosaurio"];

const rta = animales.includes("hamster")
console.log(rta)
const rta2 = animales.includes("pajaro")
console.log(rta2)


/* crear un buscador usando funciones como filter y includes, retorna un array con palabras que cumplan con la condición de tener el parámetro de búsqueda.
*/
function solution(words, query){
    return words.filter((word) =>
        word.includes(query));
}; 

var a = solution(["ana", "santi", "nico", "anastasia"], "aaaaaan");
//solution(["ana", "santi", "nico", "anastasia"], "xyz");
console.log(a)