const botoesCarrossel = document.querySelectorAll(".botao");
const imagems = document.querySelectorAll(".imagem");
const informacoes = document.querySelectorAll(".informacoes");

botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {

        desativarBotaoSelecionado();

        botao.classList.add("selecionado");

        desativarImagemSelecionado();

        imagems[indice].classList.add("ativa");

        desativarInformacoes();

        informacoes[indice].classList.add("ativa");
    });
});

function desativarInformacoes() {
    const imformacoesAtiva = document.querySelector(".informacoes.ativa");
    imformacoesAtiva.classList.remove("ativa");
}

function desativarImagemSelecionado() {
    const imagemAtiva = document.querySelector(".ativa");
    imagemAtiva.classList.remove("ativa");
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector(".selecionado");
    botaoSelecionado.classList.remove("selecionado");
}
