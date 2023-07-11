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

