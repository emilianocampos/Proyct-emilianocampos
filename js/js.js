function convertir(){
    let valore = parseInt(document.getElementById("valor").value);
    let resultado = 0;
    let dolar = 176;
    let euro = 188;
    if (document.getElementById("uno").checked){
        resultado = valore / dolar;
        alert("El cambio de PesosArg a Dolares es: $" + resultado.toFixed(2));

    }
    else if(document.getElementById("dos").checked){
        resultado = valore / euro;
        alert("El cambio de PesosArg a Euro es: $" + resultado.toFixed(2));
    }
    else{
        alert("Tiene que completar los campos necesario")
    }
}
alert("Bienvenido a ConversorArgentina online")