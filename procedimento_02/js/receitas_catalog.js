
// -------------- x ---------------------
async function initCriacao(arquivo) {
  const receitas = await fetch(arquivo);
  const receitasArquivo = await receitas.json();
  const pnlCatalogo = document.getElementById("pnlCatalogo");
  const mainTitle = document.createElement('h1');
  mainTitle.classList.add('text-center', 'p-3', 'mb-5');
  const section = document.querySelector('section');

  mainTitle.innerHTML = `Por enquanto só ${receitasArquivo.length} receitas`;
  section.insertBefore(mainTitle, pnlCatalogo);
  receitasArquivo.forEach((receita) => {
    const cardReceita = criarReceita(receita);
    cardReceita.classList.add('card-receitas', 'col', 'card');
    pnlCatalogo.appendChild(cardReceita);

  });
}

function criarReceita(receita) {
  const card = document.createElement("div");
  card.classList.add("main-receitas-card");
  const ingredientes = getListaIngredientes(receita)
  ingredientes.classList.add('lista-receita');
  const titulo = document.createElement('h2');
  titulo.classList.add('card-title', 'p-3', 'text-center');
  titulo.innerHTML = receita.titulo;
  const imagem = document.createElement('img');
  imagem.classList.add('card-img-top');
  const divTopo = document.createElement('div');
  divTopo.classList.add('topo', 'card-body','px-md-2', 'px-lg-3');
  divTopo.appendChild(imagem);
  divTopo.appendChild(titulo);
  imagem.src = receita.imagem;
  imagem.classList.add('foto-receita');
  const modoPreparo = document.createElement('p');
  modoPreparo.innerHTML = receita.preparo;
  //modoPreparo.classList.add('modo-preparo');
  modoPreparo.classList.add('px-md-2', 'px-lg-3');

  const separador = document.createElement('hr');
  separador.classList.add('px-md-2', 'px-lg-3');
  

  card.appendChild(divTopo);
  card.appendChild(ingredientes);
  card.appendChild(separador);
  card.appendChild(modoPreparo);

  return card;
}



function getListaIngredientes(receita) {
  const lista = receita;
  const listaIngredientes = lista.ingredientes.map(function (elemento) {
    return elemento;

  })

  const elementos = listaIngredientes.reduce((lista, valor) => {
    const novoItem = document.createElement("li");
    novoItem.textContent = valor;
    lista.appendChild(novoItem);
    return lista;
  }, document.createElement("ul"));
  return elementos;
}


initCriacao('./json/receitas_json.json');