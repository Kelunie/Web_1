var gunter = {
    name: "Gunter",
    origin: "Adventure Time",
    canFly: false,
    sayHello: function () {
    console.log("QUACK!!!");
    }
   };
var ramon = {
    name: "Ramón",
    origin: "Happy Feet",
    canFly: true,
    sayHello: function () {
    console.log("Estoy encantado de conocerle.");
    }
   };
var fred = {
    name: "Fred",
    origin: "Sitting Ducks",
    canFly: false,
    sayHello: function () {
    console.log("Hi there!");
    }
   };
 /* 1. Cree un arreglo con los 3 pingüinos adentro. (recuerden que pueden
asignar valores de variables y no quemar valores dentro del arreglo. */
var pinguinos = [gunter, ramon, fred];

/* 2. Escriba un ciclo for para iterar a través de cada pingüino en la matriz e
imprima el valor de la propiedad del nombre de cada pingüino en la
consola. */
for (var i = 0; i< pinguinos.length; i++){
    console.log("El nombre del pinguino es " + pinguinos[i].name + " y su posicion es " + [i]);
}
console.log("");
/* 3. Imprima la longitud de la matriz de pingüinos en la consola.*/
console.log("La longitud de la matriz de pinguinos es " + pinguinos.length);

console.log("");

/* 4. Escriba un ciclo for para iterar a través de cada pingüino en la matriz y
agregue una nueva propiedad a cada pingüino llamada numberOfFeet con
un valor aleatorio del 1 al 5.*/
for (var i = 0; i < pinguinos.length; i++) {
    pinguinos[i].numberOfFeet = Math.floor(Math.random() * 5) + 1;
};

/* 5. Escriba otro ciclo for para iterar a través de cada pingüino en la matriz, y
para cada pingüino que pueda volar, imprima en la consola un mensaje que
contenga el nombre del pingüino y "¡puede volar!" - por ejemplo, "¡Gunter
puede volar!" o "¡Ramón puede volar!" (No hagas nada por los pingüinos
que no pueden volar).*/

for (var i = 0; i < pinguinos.length; i++) {
    if (pinguinos[i].canFly) {
        console.log("¡" +pinguinos[i].name + " puede volar!");
    }
};
console.log("");

/* 6. Devuelva un arreglo solo con los pingüinos que tienen más de 2 pies */
for (var i = 0; i< pinguinos.length; i++){
    if (pinguinos[i].numberOfFeet === 2){
        console.log("El pinguino " + pinguinos[i].name + " tiene dos pies");
    }
};
console.log("");

/* 7. Agregue una nueva propiedad a su pingüino llamada favoriteFoods y
configúrela igual a una matriz que contiene una lista de tres cadenas. */
gunter.favoriteFoods = ["Pescado", "Krill", "Calamar"];
ramon.favoriteFoods = ["Sardina","Salmón","Caviar"];
fred.favoriteFoods = ["Pulpo","Camarón","Cangrejo"];

/* 8. Accede a la segunda comida favorita de sus pingüinos e imprímela en la
consola usando console.log ()  */
for (var i = 0; i < pinguinos.length; i++) {
    console.log("Segunda comida favorita de " + pinguinos[i].name + ": " + pinguinos[i].favoriteFoods[1]);
};
console.log("");

/* 9. Sin modificar nada de su código anterior, escriba una nueva línea de código
que cambie el valor del último elemento de la lista a "piñas"
(sobrescribiendo el valor anterior).*/
for (var i = 0; i < pinguinos.length; i++) {
    pinguinos[i].favoriteFoods[2] = "Piñas";
};
/* 10. Escriba un cilo for para recorrer cada comida en la propiedad de comida
favorita de sus pingüinos e imprima cada una en la consola.  */
for (var i = 0; i < pinguinos.length; i++) {
    console.log("Comidas favoritas de " + pinguinos[i].name + ":");
    for (var j = 0; j < pinguinos[i].favoriteFoods.length; j++) {
        console.log(pinguinos[i].favoriteFoods[j]);
    }
};