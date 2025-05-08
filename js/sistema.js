// só roda depois que o DOM estiver 100% pronto
document.addEventListener('DOMContentLoaded', () => {

  const itensLoja = [
    { nome: "Adaga", preco: 15, arquivo: "adaga.html" },
    /* … demais itens … */
  ];

  // Seleções seguras: se algum id não existir, loga erro e interrompe
  const moedasDisplay = document.getElementById("moedas");
  const container = document.getElementById("itens-loja");
  const inventarioContainer = document.getElementById("inventario");
  if (!moedasDisplay || !container || !inventarioContainer) {
    console.error("Elemento obrigatório não encontrado:", {
      moedasDisplay, container, inventarioContainer
    });
    return;
  }

  // estado inicial
  let moedas = 100;
  moedasDisplay.textContent = moedas;

  // renderiza os cards da loja
  itensLoja.forEach(item => {
    const card = document.createElement("div");
    card.classList.add("item");
    card.innerHTML = `
      <h3>🧾 ${item.nome}</h3>
      <p>Preço: <strong>${item.preco} PO</strong></p>
      <div class="botoes">
        <button class="ver" onclick="usarItem('${item.arquivo}')">🔍 Ver</button>
        <button class="comprar" onclick="comprarItem('${item.nome}', ${item.preco})">🛒 Comprar</button>
      </div>
    `;
    container.appendChild(card);
  });

  // abre o HTML do item em nova aba
  window.usarItem = function(arquivo) {
    window.open(`html_itens_rpg/${arquivo}`, '_blank');
  };

  // lógica de compra
  window.comprarItem = function(nome, preco) {
    if (moedas >= preco) {
      moedas -= preco;
      moedasDisplay.textContent = moedas;
      adicionarAoInventario(nome, Math.floor(preco / 2));
      alert(`Você comprou ${nome} por ${preco} PO!`);
    } else {
      alert("Você não tem ouro suficiente!");
    }
  };

  // adiciona ao inventário
  function adicionarAoInventario(nome, precoVenda) {
    const itemDiv = document.createElement("div");
    itemDiv.classList.add("item");
    itemDiv.innerHTML = `
      <h3>🧾 ${nome}</h3>
      <p>Venda por: <strong>${precoVenda} PO</strong></p>
      <div class="botoes">
        <button class="vender">💰 Vender</button>
      </div>
    `;
    // listener para vender
    itemDiv.querySelector(".vender").addEventListener("click", () => {
      moedas += precoVenda;
      moedasDisplay.textContent = moedas;
      itemDiv.remove();
      alert(`Você vendeu ${nome} por ${precoVenda} PO!`);
    });
    inventarioContainer.appendChild(itemDiv);
  }

});
