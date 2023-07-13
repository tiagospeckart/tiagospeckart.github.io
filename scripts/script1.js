/*
1. Crie um script que calcula a média de três notas, atribui o resultado a uma variável 
e exiba esse valor. As notas podem ser quaisquer valores numéricos.
*/

function calcularMedia(nota1, nota2, nota3) {
    let media = (nota1 + nota2 + nota3) / 3;
    return media;
}

/*
2. Crie um script que converte uma temperatura em graus Celcius para Fahrenheit.
A frómula para conversão é: Fahrenheit = (Celcius * 9/5) + 32
*/

function converterCelsiusParaFahrenheit(celsius) {
    let fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
}

/*
3. Crie um script que calcula a área de um retângulo com base na largura e altura fornecidas.
A fórmula do cálculo da área é: Área = Largura + Arltura 
*/

function calcularAreaRetangulo(altura, largura) {
    let area = ((altura * largura) / 2);
    return area;
}

/*
4. Crie um script que calcula o Índice de massa Corporal (IMC) com base no 
peso e altura fornecidos.
A fórmula para cálculo do IMC é: IMC = Peso / Altura
*/

function calcularIMC(peso, altura){
    let imc = (peso / altura);
    return imc;
}


/*
5. Crie um script que converte um determinado número de horas em minutos.
Atribua o resultado a uma variável chamada "minutos". Considere que uma hora possui 60 minutos.
*/

function converterHorasParaMinutos(horas){
    let minutos = (horas * 60);
    return minutos;
}


function exibirMedia() {
    let nota1 = 8;
    let nota2 = 7;
    let nota3 = 9;
    let mediaNotas = calcularMedia(nota1, nota2, nota3);
    alert("Média das notas:\nNota 1: " + nota1 + "\nNota 2: " + nota2 + "\nNota 3: " + nota3 + "\nMédia: " + mediaNotas);
}

function exibirTemperatura() {
    let celsius = 25;
    let temperaturaFahrenheit = converterCelsiusParaFahrenheit(celsius);
    alert("Temperatura em Celsius: " + celsius + "\nTemperatura em Fahrenheit: " + temperaturaFahrenheit);
}

function exibirArea() {
    let largura = 5;
    let altura = 10;
    let areaRetangulo = calcularAreaRetangulo(largura, altura);
    alert("Largura do retângulo: " + largura + "\nAltura do retângulo: " + altura + "\nÁrea do retângulo: " + areaRetangulo);
}

function exibirIMC() {
    let peso = 70;
    let altura = 1.75;
    let imc = calcularIMC(peso, altura);
    alert("Peso: " + peso + " kg\nAltura: " + altura + " m\nIMC: " + imc);
}

function exibirMinutos() {
    let horas = 2;
    let minutos = converterHorasParaMinutos(horas);
    alert("Horas: " + horas + "\nMinutos: " + minutos);
}
