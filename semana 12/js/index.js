function validar(){


    //obligatorio
    const nombre= document.getElementById("valor").value;
    if(!nombre || nombre.length==0){
        alert("Falta nombre");
        document.getElementById("nombre").focus();    
        return false;
    }
    
    
    
    
    
    
    
    
        return true;
    }
    
    
    
    
    /*var global=0;
    
    
    function cambiarColor(){
    
      
       const titulo= document.querySelector(".titulo");
       titulo.style.color="white";
       titulo.style.background="blue";
    
       alert(global);
    
    }
    
    function accion(){
    
        // alert('holaaaaa acccion');
     
    }
    
    function enviarMensaje(mensaje, numero){
    
        // const valorInput= document.getElementById("valor").value;
        const valor= document.getElementById("5").value;
        // alert(`El mensaje es: ${mensaje} y el segundo parametro es: ${numero}`);
        
        // alert(valorInput);
        alert(valor);
    
        global=valor;
    
        alert(partirMensaje());
        document.getElementById("valor").value=20;
    
    
    
    
    }
    
    function partirMensaje(){
    
        return "Mensaje partido";
    }
    
    
    
    const perro=[{
    
        id:"",
        nombre:"",
        raza:""
    }, 5, "fff"]
    
    */