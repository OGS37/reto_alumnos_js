alert("Bienvenido a mi pagina");

var nombre = prompt("Ingrese su nombre");
var apellido = prompt("Ingrese sus apellidos");

alert("Su nombre es: "+nombre+apellido);

var a = "30";
var b = "50";
var password = "";

function funcionSuma(numero1, numero2) {
    return numero1 + numero2;
}

function funcionResta(numero1, numero2) {
    return numero1 - numero2;
}

alert("La suma es " + funcionSuma(a, b));
alert("La resta es " + funcionResta(a, b));
