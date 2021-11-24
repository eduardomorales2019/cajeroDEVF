


// funcion de verificar login

function login(form) {   
if (form.usuario.value === "Victor"  ) {
    if(form.Contraseña.value  === 'Hello') {
        location = "CuentaVictor.html"      
    } 
    else  {
        alert ("error de contraseña ")
    }
    }else   {
        alert (" usuario invalido")
   
}
}

function login2(form) {
    if ( form.usuario.value === "Victor"  &&  form.Contraseña.value  ==="Hello") {
        location = "CuentaVictor.html"
    } if (form.usuario.value === "Kenny"  &&  form.Contraseña.value ==="Hola") {
        location = "CuentaKenny.html"; 
    }  if (form.usuario.value != "Victor "|| form.usuario.value != " Kenny ") {
        alert (" usuarios invalido")
    } if (form.Contraseña.value != "Hello" || form.Contraseña.value != "Hola" ){
alert (" Contraseña invalida")
    }
    
}

function login3(form) {   
    if (form.usuario.value === "Victor" && form.Contraseña.value === "Hello"  ) {
        location = "CuentaVictor.html"
       }if (form.usuario.value === "Kenny" && form.Contraseña.value === "Hola"  ) {
           location= "CuentaKenny.html"
       }  if ( form.usuario.value === "Victor" && form.Contraseña.value != "Hello") {
        alert ("clave incorrecta")
       }  if (form.usuario.value != "Victor" && form.Contraseña.value === "Hello") {
           alert("Usuario Incorrecto")
       } if (form.usuario.value != "Victor" && form.Contraseña.value != "Hello" && form.usuario.value === !"Kenny" || form.Contraseña.value === ! "Hola"){
        alert (" usuario y contraseña son incorrectas")
       } if ( form.usuario.value === "" &&  form.Contraseña.value === "") {
           alert (" usuario y contrasela indefinidos")
       }
      
       }


       function login4(form) {   
        if (form.usuario.value === "Victor" && form.Contraseña.value === "Hello" ) {
            location = "CuentaVictor.html"
        } 
        else if (form.usuario.value === "Kenny" && form.Contraseña.value === "Hola" ) {
location = "CuentaKenny.html"
        }
        else if (form.usuario.value === "Maui" && form.Contraseña.value === "Hallo" )  {
            location = " CuentaMaui.html"

        } else {
            
            alert ("Contraseña y Password incorrecto")
            
        }
       
    }
    




        // f (condition1) {
        //     //  block of code to be executed if condition1 is true
        //   } else if (condition2) {
        //     //  block of code to be executed if the condition1 is false and condition2 is true
        //   } else {
        //     //  block of code to be executed if the condition1 is false and condition2 is false
        // /** */  }*//