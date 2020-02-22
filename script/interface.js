window.onload = function()
{
    let opcion = prompt("Ingresa un número del 1 al 6");
    switch (opcion)
    {
        case "1":
        {
            let numero = prompt("Ingresa un número del 0 al 100");
            funcion01(numero);
        }
        break;
        case "2":
        {
            let respuesta;
            do 
            {
                respuesta = prompt(
                    "¿De qué color es el caballo " +
                    "blanco de Napoleón?");
            }
            while (!funcion02(respuesta));
        }
        break;
        case "3":
        {
            let mate = prompt("Indique su promedio en matemáticas");
            let fisica = prompt("Indique su promedio en física");
            let ciencias = prompt("Indique su promedio en ciencias");
            funcion03(parseInt(mate), parseInt(fisica), parseInt(ciencias));
        }
        break;
        case "4":
        {
            let fruta1 = prompt("¿Cual es tu fruta favorita?");
            let fruta2 = prompt("Nombra otra fruta");
            let fruta3 = prompt("Una fruta mas! Yummy :9");
            funcion04([fruta1, fruta2, fruta3]);
        }
        break;
        case "5":
        {
            let nombre = prompt("Ingrese su nombre")
            funcion05(nombre);
        }

        break;
        case "6":
            funcion06();
        break;
        default:
            Swal.fire({
                icon: 'error',
                title: 'Uuuups...',
                text: 'No ingresaste un númreo válido!',
              })
    }

}