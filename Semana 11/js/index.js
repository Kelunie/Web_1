//alert('ejemplo');
//variables: string number boolean [] date 
//tipo objetos


//diferencia es el scope=ambito
/*var nombre='Pedro';
let apellido='Perez';*/


if(true){

    var nombre='Pedro';
    let apellido='Perez';
   
}

//alert(nombre);
//alert(apellido);

let bandera= true;
let edad=15;
let precio=3.35;

let lista=[];


let fecha= new Date().getDate();
//alert(fecha);
//coercion
if(5===5){

   // alert('siiiiiiii');
} 
else{
  //  alert('nooooooo');
}


const PI=3.14;
//PI=3222;

const Persona={
    cedula:'1111111',
    nombre:'Pedro',
    apellido1:'Perez',
    apellido2:'Rojas',
    edad:15
};
//string template
//alert(`El nombre de la persona es ${ Persona.nombre} y tiene una edad de ${Persona.edad}`);


let tiene= Persona.hasOwnProperty('edad');
//alert(tiene);

let tienePerro=true;
//alert(tienePerro);
tienePerro=null;

if(tienePerro){
    alert('tiene perro');
}else{
    alert('no tiene perro');
}

let listaColores=['Rojo','Verde','Azul'];

//alert(listaColores[1]);
//alert(listaColores.length);

for(let i=0; i<listaColores.length;i++){

    console.log(listaColores[i]);
}
console.log('foreach');
listaColores.forEach((valor,index) => {

    if(index % 2==0){
        console.log(`El valor es: ${valor} y el indice es ${index}`);
    }
   
});
console.log('map');
listaColores.map((valor,index)=>{
    
    console.log( `El valor es: ${valor} y el indice es ${index}`);
}).filter(x=>x=='Rojo');

const listaPersonas=[{
    id:'6666',
    nombre:'PEDRO',
    apellido:'PEREZ',
    edad:50
}, 
{
    id:'2222',
    nombre:'MARIA',
    apellido:'RODRIGUIEZ',
    edad:15
},
{
    id:'488888',
    nombre:'JUAN',
    apellido:'ROJAS',
    edad:35
},
{
    id:'89898989',
    nombre:'MARCOS',
    apellido:'FERNANDEZ',
    edad:6
}
]

const listaResults =listaPersonas.map((persona, index)=>{
    let nombreRes=`Mi nombre es ${persona.nombre} ${persona.apellido}`;
    return{
        id:index,
        cedula:persona.id,
        nombre:nombreRes,
        edad:persona.edad
    }
}).filter(x=>x.edad>18);

console.log(...listaResults);
/*
function saludar2(){
alert(prueba);

}
function saludar(){
    var prueba=5;
}
saludar2();
saludar();

*/