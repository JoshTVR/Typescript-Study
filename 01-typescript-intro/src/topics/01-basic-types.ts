// let name = "Strider";
const name = "Strider";

// name = 123; // Esto es imposible en typescript porque solo se aceptan string, letras o tipos de caracteres

const nombre: string = "Straider";
let hpPoints: number | string= 95;

hpPoints = 'Hola Mundo';
hpPoints = 34;
// hpPoints = true; // Esto no se puede porque se declaro anteriormente que no se podia declarar como un boleano

let hpPoints_2: number | 'FULL'= 95;

hpPoints_2 = 4;
hpPoints_2 = 'FULL';
// hpPoints_2 = 'hello'; // Esto no se puede porque se declaro anteriormente que solo se puede integrar el string "FULL"


const isAlive: boolean = true;

console.log({
    name, hpPoints, isAlive
});


export {};