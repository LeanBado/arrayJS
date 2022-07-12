const listado =[
    {
      name: "Product 1",
      price: 1000,
      stock: 10
    },
    {
      name: "Product 2",
      price: 2000,
      stock: 20
    },
    {
        name: "Product 3",
        price: 3000,
        stock: 30
      },
  ];

  console.log(listado)

const rta = listado.map(item => ({
    ...item,
    taxes: Math.round(item.price * .19)
}));

console.log(rta)
console.log(listado)

/* retornar un array de string solo con los nombres */
const obj = [
  {
    name: 'Nicolas',
    lastName: 'Molina',
    age: 28
  },
  {
    name: 'Valentina',
    lastName: 'Molina',
    age: 19
  },
]
const rtA = obj.map(item => item.name)
console.log(rtA)


/*agregar y calcular una nueva propiedad llamada "taxes", los impuestos deben ser del 19% con base al precio base.*/
const arr = [
  {
    name: "Product 1",
    price: 1000,
    stock: 10
  },
  {
    name: "Product 2",
    price: 2000,
    stock: 20
  },
]
const a = arr.map(item => ({
  ...item,
  taxes : Math.round(item.price * .19)
}))
console.log(a)