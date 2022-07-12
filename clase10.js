/* const calendars = {
    primaryCalendar: [
      {
        startDate: new Date(2021, 1, 1, 15),
        endDate: new Date(2021, 1, 1, 15, 30),
        title: "Cita 1",
      },
      {
        startDate: new Date(2021, 1, 1, 17),
        endDate: new Date(2021, 1, 1, 18),
        title: "Cita 2",
      },
    ],
    secondaryCalendar: [
      {
        startDate: new Date(2021, 1, 1, 12),
        endDate: new Date(2021, 1, 1, 12, 30),
        title: "Cita 2",
      },
      {
        startDate: new Date(2021, 1, 1, 9),
        endDate: new Date(2021, 1, 1, 10),
        title: "Cita 4",
      },
    ],
  };
  const rta = Object.values(calendars).flat().flatMap(asd => { 
    return asd.startDate}) */

/*   console.log(rta)
 */

  const solution = [
    "Beautiful is better than ugly",
    "Explicit is better than implicit",
    "Simple is better than complex",
    "Complex is better than complicated",
  ];
  function asd(lines){
    return lines.join("").split(" ").length
  }
  const rta5 = asd(solution)
  console.log(rta5)
  const rta = solution.join("")
  const rta2 = rta.split(" ")
  const rta3 = rta2.length

                            //.replace(/ /g, "").length
 
  console.log(rta)
  console.log(rta2)
  console.log(rta3)

/*  dado un array con distintos niveles de arrays internos, aplanalos en un solo nivel
 */

function aplana(arr){
  return arr.flat(3);
}
const rta4 = aplana(["lea",[19],[29], "victoria",[[29],[19]]])
console.log(rta4)