"use strict";

/*
  ATIVIDADE PRÁTICA — LEITURA E ALTERAÇÃO DO DOM

  Regras:
  1. Não altere o arquivo atividade21.html.
  2. Faça todas as mudanças neste arquivo.
  3. Utilize document.querySelector() em todas as seleções.
  4. Utilize textContent para textos comuns e dados informados pelo usuário.
  5. Utilize innerText somente nas tarefas indicadas.
  6. Utilize innerHTML somente com conteúdos definidos no próprio código.
  7. Nunca insira dados do usuário com innerHTML ou outerHTML.
  8. Utilize outerHTML somente na tarefa indicada.
  9. Confira cada alteração no navegador e no Console.
*/

// 01. Solicite o nome do estudante e altere a mensagem de
// boas-vindas utilizando textContent.

const alt_nom = document.querySelector("#mensagem-boas-vindas");
let nome = prompt("Digite seu nome: ");
alt_nom.textContent = `Seja bem Vindo, ${nome}!`;

// 02. Mostre no Console o texto atual do nome da loja usando
// textContent. Depois, altere o nome da loja com textContent.

const nome_loja = document.querySelector("#nome-loja");
console.log(nome_loja.textContent);
nome_loja.textContent = "CodeStore 2.0";

// 03. Altere o título principal da página utilizando textContent.

const tituloPrincipal = document.querySelector("#titulo-principal");
tituloPrincipal.textContent = "Produtos de informática";

// 04. Mostre no Console o texto visível do subtítulo utilizando
// innerText. Depois, altere o subtítulo com innerText.

const subtituloPrincipal = document.querySelector("#subtitulo-principal");
console.log(subtituloPrincipal.innerText);
subtituloPrincipal.innerText = "Os melhores produtos de informática";

// 05. Insira o aviso de promoção utilizando innerHTML.
// O aviso deve possuir pelo menos uma tag <strong> e uma tag <span>.

const avisoPromocao = document.querySelector("#aviso-promocao");
let aviso = "<strong>Aviso! </strong> <span>Há produtos em oferta!</span>";
avisoPromocao.innerHTML = aviso;

// 06. Altere a categoria do produto em destaque utilizando
// textContent.

const produtoDestaque = document.querySelector("#categoria-destaque");
produtoDestaque.textContent = "Informática";

// 07. Altere o nome do produto em destaque utilizando innerText.

const nomeProdutoDestaque = document.querySelector("#nome-produto-destaque");
nomeProdutoDestaque.innerText = "Monitores";


// 08. Mostre no Console o textContent e o innerText da descrição
// do produto. Depois, altere a descrição utilizando innerText.

const descricaoProduto = document.querySelector("#descricao-produto-destaque");
console.log(descricaoProduto.textContent);
console.log(descricaoProduto.innerText);
descricaoProduto.innerText = "O melhor monitor da geração!"

// 09. Altere o preço do produto em destaque utilizando textContent.

const precoProduto = document.querySelector("#preco-produto-destaque");
precoProduto.textContent = "R$ 1.200,00";

// 10. Altere a situação do estoque utilizando innerHTML.
// Destaque a situação com uma tag <strong>.
// Utilize somente um texto definido no próprio código.

const situacaoEstoque = document.querySelector("#status-estoque");
let situacao = "<strong>Disponível</strong>";
situacaoEstoque.innerHTML = situacao;

// 11. Atualize as três estatísticas do catálogo.
// Utilize textContent na primeira, innerText na segunda e
// innerHTML com uma tag <strong> na terceira.

const estatisticaProduto = document.querySelector("#total-produtos");
estatisticaProduto.textContent = "5";

const estatisticaCategorias = document.querySelector("#total-categorias");
estatisticaCategorias.innerText = "4";

const estatisticaOferta = document.querySelector("#total-ofertas");
estatisticaOferta.innerHTML = "<strong> 10 </strong>";

// 12. Altere os nomes dos três produtos secundários.
// Utilize textContent para impedir que possíveis tags sejam
// interpretadas pelo navegador.

const alterarNomeProduto_1 = document.querySelector("#nome-produto-01");
const alterarNomeProduto_2 = document.querySelector("#nome-produto-02");
const alterarNomeProduto_3 = document.querySelector("#nome-produto-03");

alterarNomeProduto_1.textContent = "Teclado Mecânico Gamer Switch Blue";
alterarNomeProduto_2.textContent = "Logitech MX Master 3S";
alterarNomeProduto_3.textContent = "LG UltraGear 32GX850A-B";



// 13. Atualize a lista de benefícios utilizando innerHTML.
// Crie pelo menos três elementos <li> dentro da lista.

const listaBeneficios = document.querySelector("#lista-beneficios");
listaBeneficios.innerHTML = `
    <li>Frete grátis para compras acima de R$ 200</li>
    <li>Parcelamento em até 12x sem juros</li>
    <li>Troca garantida em até 30 dias</li>
`;

// 14. Atualize automaticamente o ano do rodapé utilizando
// new Date().getFullYear() e textContent.

const anoAtual = document.querySelector("#ano-atual");
anoAtual.textContent = new Date().getFullYear();

// 15. Mostre no Console o outerHTML do texto final do rodapé.
// Depois, utilize outerHTML para substituir completamente esse
// elemento por uma nova tag <p> com classe e conteúdo diferentes.
// Após a substituição, selecione novamente o novo elemento e
// mostre seu outerHTML no Console.

const textoRodape = document.querySelector("#texto-rodape");
console.log(textoRodape.outerHTML);
textoRodape.outerHTML = '<p class="novo-rodape">Loja atualizada em 2026</p>';

const novoRodape = document.querySelector(".novo-rodape");
console.log(novoRodape.outerHTML);