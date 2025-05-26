/*

a)

la principal diferencia entre esas son: el alcance (scope), la reasignación y el hoisting

var = es la forma antigua para declarar variables

let = Es la que se utiliza comunmente para declarar variables

const = se utiliza para establecer variables constantes.

b)

for	= Recorre manualmente con índice
forEach	= Recorre un array y ejecuta una función.
map	= Crea un nuevo array con lo que retorna cada elemento
filter = Crea un nuevo array con los elementos que cumplan una condición

c) objeto.propiedad

*/

/* EJERCICIO 1

A)

const numeros = [3, 7, 2, 9, 12, 5, 8];

numeros.forEach(numeros => {
    if(numeros > 5)
        console.log(numeros)
        console.log("------------")
});

B)

const numerospares = numeros.filter((numeros)=> numeros %2 === 0 )
console.log(numerospares)

*/

/* EJERCICIO 2

A)

const estudiantes = [
    { nombre: "Ana", nota: 8 },
    { nombre: "Juan", nota: 5 },
    { nombre: "Lucía", nota: 9 },
    { nombre: "Pedro", nota: 4 }];

 

const estudiantesN = estudiantes.map(function(estudiante){
    return estudiante.nombre
});

console.log(estudiantesN)

B)

const aprobados = estudiantes.filter((estudiantes)=> estudiantes.nota > 6)
console.log(aprobados)

C)

estudiantes.forEach(estudiantes => {
    if (estudiantes.nota > 6){
        console.log("Aprobado:", estudiantes)
    } else{
        console.log("Desaprobado: ", estudiantes)
    }
});

*/