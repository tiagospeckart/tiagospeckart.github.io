// 1. Crie um script que receba o nome e sobrenome de uma pessoa e concatene-os em uma única string.
function concatenarNomeSobrenome(nome, sobrenome){
    let nomeCompleto = nome + " " + sobrenome;
    return "Nome completo: " + nomeCompleto;
}

// 2. Crie um script que conte quantos caracteres uma determinada string possui e exiba essa informação.
function contarCaracteres(string){
    let totalCaracteres = string.length;
    return "Total de caracteres: " + totalCaracteres;
}

// 3. Crie um script que converta uma string fornecida para letras maiúsculas e exiba a frase em caixa alta.
function converterParaMaiusculas(string){
    let stringMaiuscula = string.toUpperCase();
    return "Frase em maiúsculas: " + stringMaiuscula;
}

// 4. Crie um script que extraia uma parte específica de uma string. Por exemplo, extraia os primeiros três caracteres de uma palavra e exiba o resultado.
function extrairParteString(string){
    let parteString = string.substring(0, 3);
    return "Primeiros três caracteres: " + parteString;
}

// 5. Crie um script que substitua as letras, conforme:
// A -> 4
// I (letra i) -> 1
// E -> 3
// O (letra ó) -> 0 (zero)
// S -> 5
function substituirLetras(string){
    let novaString = string.replace(/A/gi, '4').replace(/I/gi, '1').replace(/E/gi, '3').replace(/O/gi, '0').replace(/S/gi, '5');
    return "Frase com letras substituídas: " + novaString;
}