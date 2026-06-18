// para definir una funcion basica en javascript, es de la siguiente manera:
/*
function addNumbers(){
    // Cuando la funcion se deja de la siguiente manera, esta no regresa nada, un void
    // Un void no es lo mismo que un undefined
    // El void significa que explicitamente nohay un return en la funcion, usualmente indiferente pero identificable como diferencia ebn el codigo
    return undefined; // de esta manera se puede hacer que la  funcion se marque como undefined

    // undefined significa que no regresa nada
}
*/

// una de las reglas dentro de typescript es que se recomienda que siempre se mantenga a typescript con el mayor grado restricciones en el tipado
function addNumbers(a : number, b: number){  // Aqui puede dar un error si nosotros decidimos no ponerle ningun tipo de variable y eso ocurre por el tipado estricto
  return a + b;
}

const addNumbersArrow_string = (a: number, b: number):string =>{
    return `${a + b}`;
}
const addNumbersArrow = (a: number, b: number) =>{
    return a + b;
}

function multiply(firstNumber : number, secondNumber? : number, base : number = 2){
    return firstNumber * base;
}

const result : number = addNumbers(2, 1) // esta constante va a inferir que es de tipo numero porque el resultado de la funcion es un tipo numero
const result_2 : string = addNumbersArrow_string(2, 1) 
const multiplyResult: number = multiply(5)

console.log({result, result_2, multiplyResult}); // las llaves {} son para imprimir la variable tambien dentro del log, en caso de no hacerlo, simplemente va a mostrarnos el log de la variable o constante dentro de la consola
