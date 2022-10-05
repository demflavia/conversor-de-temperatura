function GrausF() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmGrausCelsius = parseFloat(valor);

  var tempF = valorEmGrausCelsius * 1.8 + 32;
  console.log(tempF);

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "O resultado em graus Fahrenheit é " + tempF;
  elementoValorConvertido.innerHTML = valorConvertido;
}

function GrausK() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmGrausCelsius = parseFloat(valor);

  var tempK = valorEmGrausCelsius + 273.15;
  console.log(tempK);

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "O resultado em graus Kelvin é " + tempK;
  elementoValorConvertido.innerHTML = valorConvertido;
}