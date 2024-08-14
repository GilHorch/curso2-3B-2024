//seleciona a clase farametro senha e armazena na variavel numero senha
const numerosenha = document.querySelector('.parametro-senha__texto');

let tamanhoSenha = 12;

numerosenha.textContent = tamanhoSenha;//altera o valor do numero senha
//seleciona todas as clases .parametro-senha__botao
const botoes = document.querySelectorAll('.parametro-senha__botao');

botoes[0].onclick = diminuiTamanho;//função para diminuir o tamanho da senha
function diminuiTamanho() {
    tamanhoSenha = tamanhoSenha - 1;//iminui uma unidade a variável tamanhoSenha
    numerosenha.textContent = tamanhoSenha;//altera o valor do numero senha
}

botoes[1].onclick = aumentaTamanho;//função para diminuir o tamanho da senha
function aumentaTamanho() {
    tamanhoSenha = tamanhoSenha + 1;//iminui uma unidade a variável tamanhoSenha
    numerosenha.textContent = tamanhoSenha;//altera o valor do numero senha
}

console.log(botoes);