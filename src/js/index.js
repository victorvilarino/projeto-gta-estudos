/*

Objetivo 1 - quando o usuário clicar no botão de seleção de plataformas deve abrir uma caixa com os botões de seleção de plataforma
    Passo 1 pegar o botão de seleção de plataformas no JS pra poder verificar quando o usuário clicar em cima dele

    Passo 2 pegar o conteúdo do elemento que precisa ser mostrado

    Passo 3 pegar o clique do usuário no js

    Passo 4 quando o usuário clicar no botão, adicionar a classe "ativo" na listagem de plataformas dentro do botão para que o conteúdo apareça  

Objetivo 2 - caso a lista de botões de plataformas já esteja aparecendo e o usuário clicar em cima do botão, o conteúdo deve ser encondido

    Passo 1 verificar se o botão já esta aberto, se sim, a classe ativo deve ser removida para que ele esconda o conteúdo novamente

*/

const botao = document.querySelector(".btn-plataforma");

const elementoPlataformas = document.querySelector(".btn-plataforma .plataformas");

botao.addEventListener("click", () =>{
    elementoPlataformas.classList.toggle("ativo");


    // if(botaoEstaAberto) {
    //     elementoPlataformas.classList.remove("ativo")
    // }else{
    //     elementoPlataformas.classList.add("ativo")
    // }
}); 


