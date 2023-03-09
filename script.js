let opcion = 0, saldo = 0
alert("BIENVENIDO AL CAJERO AUTOMÁTICO")

do{
    opcion = Number(prompt("ELIGA LA OPCION QUE DESEA EJECUTAR\n\n1 - Consultar Saldo\n2 - Realizar un deposito\n3 - Extraer efectivo\n0 - Para salir"))
    let deposito = 0, extraccion = 0
    switch (opcion){
        case 0:
            break
        case 1:
            alert("Su saldo actual es de " + saldo + " dolares")
            break;
        case 2:
            deposito = Number(prompt("indique el monto que desea depositar"))
            if(deposito < 0){
                alert("el monto ingresado es invalido")
            } else {
                saldo = sumar(saldo, deposito)
            }
            break
        case 3:
            extraccion = Number(prompt("indique cuanto dinero desea extraer"))
            if(saldo < extraccion || extraccion < 0) {
                alert("la cantidad que quiere extraer supera su saldo actual")
            } else { 
                saldo = restar(saldo, extraccion)
            }
            break
        default:
            alert("INGRESE UNA OPCION VALIDA")
    }
}while(opcion != 0)

alert("GRACIAS, QUE TENGA UN BUEN DIA!")