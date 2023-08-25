document.addEventListener("DOMContentLoaded", function () {
    var customAlert = document.getElementById("customAlert");
    var cerrarAlertBtn = document.getElementById("cerrarAlert");

    cerrarAlertBtn.addEventListener("click", function () {
        customAlert.style.display = "none";
    });

    customAlert.style.display = "block";
});
/* #1 */
// Array de meses
var meses = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
];

// Mostrar los meses en la consola
for (var i = 0; i < meses.length; i++) {
    console.log(meses[i]);
}

/* #2 */
var valores = [true, 5, false, "hola", "adios", 2];

// 1. Determinar cuál de los dos elementos de texto es mayor/ o iguales
var texto1 = valores[3];
var texto2 = valores[4];

if (texto1.length > texto2.length) {
    console.log(`"${texto1}" es mayor que "${texto2}"`);
} else if (texto2.length > texto1.length) {
    console.log(`"${texto2}" es mayor que "${texto1}"`);
} else {
    console.log(`"${texto1}" y "${texto2}" tienen la misma longitud`);
}

// 2. Utilizando exclusivamente los dos valores booleanos del array,
// determinar los operadores necesarios para obtener un resultado true y otro resultado false
var booleano1 = valores[0];
var booleano2 = valores[2];

var resultadoTrue = booleano1 || booleano2; // Operador OR
var resultadoFalse = booleano1 && booleano2; // Operador AND

console.log("Resultado True:", resultadoTrue);
console.log("Resultado False:", resultadoFalse);

// 3. Determinar el resultado de las cinco operaciones matemáticas
// realizadas con los dos elementos numéricos
var numero1 = valores[1];
var numero2 = valores[5];

var suma = numero1 + numero2;
var resta = numero1 - numero2;
var multiplicacion = numero1 * numero2;
var division = numero1 / numero2;
var modulo = numero1 % numero2;
var elevacion = numero1 ** numero2;

console.log("Suma:", suma);
console.log("Resta:", resta);
console.log("Multiplicación:", multiplicacion);
console.log("División:", division);
console.log("Módulo:", modulo);
console.log("Elevación", elevacion);

/* #3 */
/* Completar las condiciones de los if del siguiente script para que los
mensajes se muestren siempre de forma correcta:
5. var numero1 = 5;
6. var numero2 = 8;
7.
8. if(...) {
9. console.log("numero1 no es mayor que numero2");
10. }
11. if(...) {
12. console.log("numero2 es positivo");
13. }
14. if(...) {
15. console.log("numero1 es negativo o distinto de cero");
16. }
17. if(...) {
18. console.log("Incrementar en 1 unidad el valor de numero
1 no lo hace mayor o igual que numero2");
19. }
 */

var numero1 = 5;
var numero2 = 8;

if (numero1 <= numero2){
    console.log(`"${numero1}" No es mayor que "${numero2}"`);
};

if (numero2 > 0){
    console.log(`"${numero2}" Es positivo`);
};

if (numero1 < 0 || numero1 !== 0){
    console.log(`"${numero1}" es negativo o distinto de cero`);
}

if (++numero1 <= numero2){
    console.log(`Incrementar en 1 unidad el valor de "${--numero1}" No lo hace mayor o igual que "${numero2}"`);
};

/* #4 */
/* El factorial de un número entero n es una operación matemática que
consiste en multiplicar todos los factores n x (n-1) x (n-2) x ... x 1.
Así, el factorial de 5 (escrito como 5!) es igual a: 5! = 5 x 4 x 3 x 2 x
1 = 120 */
function calcularFactorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        var factorial = 1;
        for (var i = 2; i <= n; i++) {
            factorial *= i;
        }
        return factorial;
    }
}

var numero = 5;
var factorialNumero = calcularFactorial(numero);
console.log(`El factorial de ${numero} es ${factorialNumero}`);

/* #5 */
/* Escribir el código de una función a la que se pasa como parámetro un
número entero y devuelve como resultado una cadena de texto que
indica si el número es par o impar. Mostrar por pantalla el resultado
devuelto por la función. La función es llamada mediante un botón y
pasarle el parámetro */
// Función para determinar si un número es par o impar o en blanco
function determinarParOImpar(numero) {
    if (numero % 2 === 0) {
        return " par";
    } if(numero % 2 == 1) {
        return " impar";
    } else{
        return "ta en blanco"
    }
}

// Obtener referencia al botón y al campo de entrada
var calcularBtn = document.getElementById("calcularBtn");
var numeroInput = document.getElementById("numeroInput");
var resultadoElement = document.getElementById("resultado");

// Agregar un evento al botón para calcular y mostrar paridad
calcularBtn.addEventListener("click", function () {
    var numeroIngresado = parseInt(numeroInput.value, 10);
    var resultado = determinarParOImpar(numeroIngresado);
    resultadoElement.textContent = `El número ingresado es${resultado}`;
});
/* #6 */
/* Definir una función que muestre información sobre una cadena de texto
que se le pasa como argumento. A partir de la cadena que se le pasa, la
función determina si esa cadena está formada sólo por mayúsculas, sólo
por minúsculas o por una mezcla de ambas. */
function analizarCadena(cadena) {
    // toUpperCase se usa para comparar la cadena con puras mayusculas
    if (cadena === cadena.toUpperCase()) {
        return "La cadena está formada solo por mayúsculas.";
    // toUpperCase se usa para comparar la cadena con puras minusculas
    } else if (cadena === cadena.toLowerCase()) {
        return "La cadena está formada solo por minúsculas.";
    } else {
        return "La cadena es una mezcla de mayúsculas y minúsculas.";
    }
}

var texto = "Pericles es buena Persona";
var resultado = analizarCadena(texto);
console.log(resultado);
