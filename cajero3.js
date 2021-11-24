let saldo =  290

let deposito = " "
let retiro = " "

function depositar() {
    deposito = parseFloat(document.getElementsByName("deposito")[0].value);

    if (isNaN(deposito)) {
        alert("El valor ingresado no es número válido");
        return;
    } 
       saldo = saldo + deposito;
 
    
}

function retirar() {
    retiro = parseFloat(document.getElementsByName("retiro")[0].value);

    if (isNaN(retiro)) {
        alert("El valor ingresado no es número válido");
        return;
    }

    if (retiro > saldo) {
        alert("Su fondo disposible no es suficiente");
        return;
    }

    saldo = saldo - retiro;    
}

function verificar() {

    if (saldo <= 10 ) {
        alert ("Tu saldo debe ser  mayor de 10  ");
        return 
        
     } else if (saldo >=990 ) {
         alert ("tu saldo  debe ser mayor de 990")
     }
    document.getElementsByName("verificacion")[0].value = saldo 
}


 function funcionBotonSalir()  {

 location="index.html"
 }