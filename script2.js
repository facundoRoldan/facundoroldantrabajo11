var sabores=prompt("ingresar gusto de helado");
var precio = 0;
var preciofinal = 0;
var helado = 50;

if (sabores=="oreo"){
    precio= 10;
    preciofinal = helado + precio;
    alert("el helado cuesta" + preciofinal)
}else if (sabores=="kitkat"){
    precio= 15;
    preciofinal = helado + precio;
    alert("el helado cuesta" + preciofinal)
}else if (sabores=="kinder"){
    precio= 25;
    preciofinal = helado + precio
    alert("el helado cuesta" + preciofinal)
}else alert("no tenemos este topping");






