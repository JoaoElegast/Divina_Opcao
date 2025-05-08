const itensLoja = [
  { nome: "Adaga", preco: 15, arquivo: "adaga.html" },
  { nome: "Escudo", preco: 25, arquivo: "escudo.html" },
  { nome: "Poção Verde", preco: 10, arquivo: "pocao_verde.html" },
  { nome: "Elmo de Ferro", preco: 30, arquivo: "elmo_de_ferro.html" },
  { nome: "Livro Antigo", preco: 20, arquivo: "livro_antigo.html" },
  { nome: "Chave Antiga", preco: 12, arquivo: "chave_antiga.html" },
  { nome: "Machado de Guerra", preco: 35, arquivo: "machado_de_guerra.html" },
  { nome: "Mapa do Tesouro", preco: 40, arquivo: "mapa_do_tesouro.html" },
  { nome: "Armadura Pesada", preco: 50, arquivo: "armadura_pesada.html" },
  { nome: "Poção Azul", preco: 10, arquivo: "pocao_azul.html" },
  // ...adicione os outros itens aqui com os nomes corretos do ZIP
];

let moedas = 100;
document.getElementById("moedas").textContent = moedas;

const container = document.getElementById("itens-loja");
const inventarioContainer = document.getElementById("inventario");

itensLoja.forEach(item => {
  const card = document.createElement("div");
  card.classList.add("item");

  card.innerHTML = `
    <h3>🧾 ${item.nome}</h3>
    <p>Preço: <strong>${item.preco} PO</strong></p>
    <div class="botoes">
      <button class="ver" onclick="usarItem('${item.arquivo}')">🔍 Ver item</button>
      <button class="comprar" onclick="comprarItem('${item.nome}', ${item.preco})">🛒 Comprar</button>
    </div>
  `;

  container.appendChild(card);
});

// Função para usar o item
function usarItem(arquivo) {
  window.open(`html_itens_rpg/${arquivo}`, '_blank');
}

// Função para comprar um item
function comprarItem(nome, preco) {
  if (moedas >= preco) {
    moedas -= preco;
    document.getElementById("moedas").textContent = moedas;
    alert(`Você comprou ${nome} por ${preco} PO!`);
    adicionarAoInventario(nome, preco);
  } else {
    alert("Você não tem ouro suficiente!");
  }
}

// Função para adicionar item ao inventário
function adicionarAoInventario(nome, preco) {
  const itemInventario = document.createElement("div");
  itemInventario.classList.add("item");

  itemInventario.innerHTML = `
    <h3>🧾 ${nome}</h3>
    <p>Preço de venda: <strong>${preco / 2} PO</strong></p>
    <div class="botoes">
      <button class="vender" onclick="venderItem('${nome}', ${preco / 2})">💰 Vender</button>
    </div>
  `;

  inventarioContainer.appendChild(itemInventario);
}

// Função para vender o item
function venderItem(nome, precoVenda) {
  moedas += precoVenda;
  document.getElementById("moedas").textContent = moedas;
  
  // Remover o item do inventário
  const item = event.target.closest('.item');
  item.remove();

  alert(`Você vendeu ${nome} por ${precoVenda} PO!`);
}
