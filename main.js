//seleciona a clase farametro senha e armazena na variavel numero senha
const numerosenha = document.querySelector('.parametro-senha__texto');

let tamanhoSenha=12;

numerosenha.textContent = tamanhoSenha;//altera o valor do numero senha
//seleciona todas as clases .parametro-senha__botao
const botoes=querySelectorAll('.parametro-senha__botao');

botoes[0].onclick = diminuiTamanho;

function iminuiTamanho(){
tamanhoSenha=tamanhoSenha-1;//iminui uma unidade a variável tamanhoSenha
}