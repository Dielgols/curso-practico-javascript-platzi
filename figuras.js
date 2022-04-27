// Código del cuadrado

function perimetroCuadrado(lado) {
  return lado * 4;
}

function calcularPerimetroCuadrado() {
  const input1 = document.getElementById("InputCuadrado1");
  const value1 = parseInt(input1.value);

  const perimetro = perimetroCuadrado(value1);
  alert(perimetro);
}

function areaCuadrado(lado) {
  return lado * lado;
}

function calcularAreaCuadrado() {
  const input = document.getElementById("InputCuadrado2");
  const value1 = parseInt(input.value);

  const area = areaCuadrado(value1);
  alert(area);
}


// Código del triángulo

function perimetroTriangulo(lado1, lado2, base) {
  return lado1 + lado2 + base;
}

function calcularPerimetroTriangulo() {
  const input1 = document.getElementById("InputTriangulo1");
  const input2 = document.getElementById("InputTriangulo2");
  const input3 = document.getElementById("InputTriangulo3");
  const value1 = parseInt(input1.value);
  const value2 = parseInt(input2.value);
  const value3 = parseInt(input3.value);

  const perimetro = perimetroTriangulo(value1, value2, value3);
  alert(perimetro);
}

function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}

function calcularAreaTriangulo() {
  const input1 = document.getElementById("InputTriangulo4");
  const input2 = document.getElementById("InputTriangulo5");
  const value1 = parseInt(input1.value);
  const value2 = parseInt(input2.value);

  const area = areaTriangulo(value1, value2);
  alert(area);
}


// Código del círculo

function diametroCirculo(radio) {
  return radio * 2;
}

function calcularDiametroCirculo() {
  const input1 = document.getElementById("InputCirculo1");
  const value1 = parseInt(input1.value);

  const diametro = diametroCirculo(value1);
  alert(diametro);
}

const PI = Math.PI;

function circunferenciaCirculo(radio) {
  const diametro = diametroCirculo(radio);
  return diametro * PI;
}

function calcularCircunferenciaCirculo() {
  const input1 = document.getElementById("InputCirculo2");
  const value1 = parseInt(input1.value);

  const circunferencia = circunferenciaCirculo(value1);
  alert(circunferencia);
}

function areaCirculo(radio) {
  return (radio * radio) * PI;
}

function calcularAreaCirculo() {
  const input1 = document.getElementById("InputCirculo3");
  const value1 = parseInt(input1.value);

  const area = areaCirculo(value1);
  alert(area);
}

// Código del triángulo isósceles

function areaIsosceles(lado1, lado2, base) {
  if (lado1 === lado2 && lado1 > base) {
    return Math.sqrt(lado1 ** 2 - base ** 2 / 4);
  }
  else {
    alert("Este no es un triángulo isósceles.");
  }
}

function calcularAreaIsosceles() {
  const input1 = document.getElementById("InputIsosceles1");
  const input2 = document.getElementById("InputIsosceles2");
  const input3 = document.getElementById("InputIsosceles3");
  const value1 = parseInt(input1.value);
  const value2 = parseInt(input2.value);
  const value3 = parseInt(input3.value);

  const area = areaIsosceles(value1, value2, value3);

  if (value1 === value2 && value1 > value3) {  
    alert(area);
  }
  else {
    alert("No se pudo calcular el área.");
  }
}
