/*
Ejercicio 4: Calculadora básica
Escribe una función llamada calculadora(operacion, num1, num2) que reciba una operación ("suma", "resta", "multiplicacion", "division")
y dos números. Retorna el resultado de la operación. 
Si la operación no es válida, debe retornar "Operación no reconocida".
Recuerde que "No se puede dividir entre 0".
*/
function calculadora(operacion, num1, num2) {
    switch(operacion) {
        case "+":
        return num1 + num2
        case "-":
        return num1 - num2
        case "*":
        return num1 * num2
        case "/":
        if (num2 === 0){
            return "No es posible dividir entre 0"
        } else {
            return num1/num2
        }

        default: 
        return "Error en el operador"
    }
}

console.log("-----------------------------------")
console.log("EJERCICIO 4")
console.log("-----------------------------------")
console.log(calculadora("suma", 5, 3));         // 8
console.log(calculadora("division", 10, 0));    // "No se puede dividir entre 0"
console.log(calculadora("multiplicacion", 2, 4)); // 8