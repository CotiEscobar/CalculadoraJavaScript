//Codigo del cuadrado
console.group("Cuadrado");
//perimetro
function perimetroCuadrado(lado) {
    return lado * 4;
};
perimetroCuadrado();
//area
const areaCuadrado = (lado) => lado * lado;
areaCuadrado();
console.groupEnd();


//Codigo del triangulo
console.group("Triangulo");
//perimetro
function perimetroTriangulo (lado1, lado2, base) {
    return lado1 + lado2 + base;
}
//area
const areaTriagunlo = (base, altura) => (base * altura) / 2;
console.groupEnd();

//Codigo del circulo
console.group("Circulo");
//diametro
const DM_CIRC = (radio) => radio * 2;
//PI
const PI = Math.PI;
//circunferencia
function PERI_CIRC(radio){
    const diametro = DM_CIRC(radio);
    return diametro * PI;
}
//area
const AREA_CIRC = (radio) => PI * radio ** 2;
console.groupEnd();

//aqui interactuamos con html
function calcularPerimetroCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    
    const resultadoPerimetroCuadrado = document.getElementById("square-perimeter-result");
    resultadoPerimetroCuadrado.innerText = "El perímetro del cuadrado es " + perimetro + " cm²";
}

function calcularAreaCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    
    const resultadoAreaCuadrado = document.getElementById("square-area-result");
    resultadoAreaCuadrado.innerText = "El área del cuadrado es " + area + " cm²";
}
//
function calcularPerimetroTriangulo() {
    const ladoA = document.getElementById("inputLadoA");
    const valueA = parseInt(ladoA.value);

    const ladoB = document.getElementById("inputLadoB");
    const valueB = parseInt(ladoB.value);

    const base = document.getElementById("inputBase");
    const valueBase = parseInt(base.value);

    const perimetro = perimetroTriangulo(valueA, valueB, valueBase);
    
    const resultadoPerimetroTriangulo = document.getElementById("triangle-perimeter-result");
    resultadoPerimetroTriangulo.innerText = "El perímetro del triángulo es " + perimetro + " cm";
}
function calcularAreaTriangulo() {
    const base = document.getElementById("inputBaseArea");
    const valueBase = base.value;

    const altura = document.getElementById("inputAltura");
    const valueAltura = altura.value;

    const area = areaTriagunlo(valueBase, valueAltura);
    
    const resultadoAreaTriangulo = document.getElementById("triangle-area-result");
    resultadoAreaTriangulo.innerText = "El perímetro del triángulo es " + area + " cm²";
}
//
function calcularDiametroCirculo() {
    const radio = document.getElementById("inputRadio");
    const valueRadio = radio.value;

    const diametro = DM_CIRC(valueRadio);
    
    const resultadoDiametroCirculo = document.getElementById("circle-diameter-result");
    resultadoDiametroCirculo.innerText = "El diámetro del circulo es " + diametro + " cm";
}
function calcularCircunferenciaCirculo() {
    const radio = document.getElementById("inputRadio");
    const valueRadio = radio.value;

    const circunferencia = PERI_CIRC(radio.value);

    const resultadoCircunferenciaCirculo = document.getElementById("circle-circumference-result");
    resultadoCircunferenciaCirculo.innerText = "La circunferencia del circulo es " + circunferencia + " cm";
}
function calcularAreaCirculo() {
    const radio = document.getElementById("inputRadio");
    const valueRadio = radio.value;

    const area = AREA_CIRC(radio.value);
    const resultadoAreaCirculo = document.getElementById("circle-area-result");
    resultadoAreaCirculo.innerText = "El area del circulo es " + area + " cm²";
}
    
