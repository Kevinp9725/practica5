const Texto = prompt("Ingrese una cadena de texto:");

if (Texto !== null && Texto !== "") {
    const invertir = Texto.split("").reverse().join("");
    console.log("la Cadena original es: '",Texto,"' y la cadena invertida es: '", invertir,"'");
} else {
    console.log("No has ingresado texto");
}