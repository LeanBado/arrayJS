//ordena de menor a mayor
const ejercicio1 = [5,6,7,8,5,4,2,3,54,6,8]
function ordena(arr){
    return arr.sort((a,b)=>
        a-b
    )
}
const rta = ordena(ejercicio1)
console.log(rta)

//ordena de menor a mayor cantidad de caracteres
const ejercicio2 = ["Hola","Viajar","Sol","Aprender"]
function ordena2(arr){
    return arr.sort((a,b)=>
    a.length - b.length)
}
const rta2 = ordena2(ejercicio2)
console.log(rta2)

//ordena por fecha de mas reciente a mas antigua y devuelve sólo los nombres
const ejercicio3 = [
    {
      name: "Nicolas",
      dateOfBirth: new Date(1993, 6, 9),
    },
    {
      name: "Santiago",
      dateOfBirth: new Date(2018, 6, 11),
    },
    {
      name: "Zulema",
      dateOfBirth: new Date(1994, 10, 7),
    },
  ]

function ordena3(arr){
    return arr.sort((a,b)=>
        b.dateOfBirth - a.dateOfBirth).map(item => item.name)
}
const rta3 = ordena3(ejercicio3)
console.log(rta3)

/* tienes un array con una lista de strings que 
representan el nombre y apellido de varios usuarios, el reto es retornar ese array ordenado alfabéticamente por el apellido. */

const ejercicio4 = ["Nicolas Molina","Andrea Perez","Zulema Vicente","Juan Amador"]
function ordena4(arr){
    return arr.sort((a, b) => {
        const lastNameA = a.split(" ")[1];
        console.log(lastNameA)
        const lastNameB = b.split(" ")[1];
        console.log(lastNameB)

        return lastNameA.localeCompare(lastNameB);
    });
}; 
const rta4 = ordena4(ejercicio4)
console.log(rta4)

/* tienes un array de números positivos y negativos, tu reto es retornar un array ordenado de menor a mayor y dejando los valores sin que se repitan números.
 */
const ejercicio5 = [1, 2, -3, -1, 2, 4, 4, 1, 45, -1]

function eliminaIgualesOrdena(arr){
    const aux = new Set(arr)
    const aux2 = [...aux]
    aux2.sort((a,b)=> a-b)
    return aux2
}
const rta5 = eliminaIgualesOrdena(ejercicio5)
console.log(rta5)

/* tienes un array de números positivos y negativos, tu reto es retornar un objeto con el número de veces que aparece un número.
*/
const ejercicio6 = [1, 2, -3, -1, 2, 4, 4, 1, 45, -1]
function cuenta(arr){
  return  arr.reduce((obj, item) =>{  
        if(!obj[item]){
            obj[item] = 1;
        } else{      
            obj[item] += 1;
        }
        return obj
    },{});
}
const rta6 = cuenta(ejercicio6)
console.log(rta6)

/* agregar un elemento al final de un array a partir de uno original y sin modificar los elementos del original
*/
const ejercicio7 = [1, 2, 3]
const ejercicio8 = ["A", "B"]
function agrega(arr, elemento){
    const aux = [...arr]
    aux.push(elemento)
    return aux
}
const rta7 = agrega(ejercicio7, 4)
const rta8 = agrega(ejercicio8, "C")
console.log(rta7)
console.log(ejercicio7)
console.log(rta8)
console.log(ejercicio8)

/* tienes un array de números y tienes que modificar un valor de ese array en una posición específica.
Pero debes tener en cuenta que no puedes cambiar el array original.
*/
const ejercicio9 = [1, 2, 3]
const ejercicio10 = ["A", "B", "C"]

function modifica(arr, index, newValue){
    return arr.map((item, indice) =>{
        if(indice == index){
            return item[indice] = newValue
        } return item
    }
    )
}
const rta9 = modifica(ejercicio9,0, "change")
console.log(rta9)
const rta10 = modifica(ejercicio10, 1, 1)
console.log(rta10)


/* LO MISMO QUE EL ANTERIOR PERO ELIMINANDO
 */
const ejercicio11 =[1, 2, 3]
const ejercicio12 =["A", "B", "C"]

function modifica2(arr, index){
    return arr.filter((elemento, indice) => indice !== index)
}

const rta11= modifica2(ejercicio11, 0)
console.log(rta11)
console.log(ejercicio11)
const rta12= modifica2(ejercicio12, 1)
console.log(rta12)
console.log(ejercicio12)