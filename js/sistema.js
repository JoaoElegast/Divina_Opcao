// Sistema de Loja e Inventário - corrigido para rodar em páginas sem container de loja
// e sem gerar erros de elemento null

// Aguarda o DOM carregar
document.addEventListener('DOMContentLoaded', () => {
  // Estado inicial de moedas
  let moedas = 100;

  // Referências aos elementos, podem ser null se não existirem nesta página
  const moedasDisplay = document.getElementById("moedas");
  const lojaContainer = document.getElementById("itens-loja");
  const inventarioContainer = document.getElementById("inventario");

  // Atualiza display de moedas
  if (moedasDisplay) {
    moedasDisplay.textContent = moedas;
  }

  // Dados da loja
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
    { nome: "Poção Azul", preco: 10, arquivo: "pocao_azul.html" }
  ];

  // Renderiza itens da loja somente se o container existir
  if (lojaContainer) {
    itensLoja.forEach(item => {
      const card = document.createElement("div");
      card.classList.add("item");
      card.innerHTML = `
        <h3>🧾 ${item.nome}</h3>
        <p>Preço: <strong>${item.preco} PO</strong></p>
        <div class="botoes">
          <button class="ver">🔍 Ver</button>
          <button class="comprar">🛒 Comprar</button>
        </div>
      `;

      // Botões com eventListeners em vez de onclick inline
      const [btnVer, btnComprar] = card.querySelectorAll('button');
      btnVer.addEventListener('click', () => usarItem(item.arquivo));
      btnComprar.addEventListener('click', () => comprarItem(item.nome, item.preco));

      lojaContainer.appendChild(card);
    });
  }

  // Função para abrir o HTML do item
  window.usarItem = function(arquivo) {
    const path = `html_itens_rpg/${arquivo}`;
    window.open(path, '_blank');
  };

  // Função de compra
  window.comprarItem = function(nome, preco) {
    if (moedas >= preco) {
      moedas -= preco;
      if (moedasDisplay) moedasDisplay.textContent = moedas;
      alert(`Você comprou ${nome} por ${preco} PO!`);
      adicionarAoInventario(nome, Math.floor(preco / 2));
    } else {
      alert("Você não tem ouro suficiente!");
    }
  };

  // Adiciona item ao inventário, se container existir
  function adicionarAoInventario(nome, precoVenda) {
    if (!inventarioContainer) return;

    const itemDiv = document.createElement("div");
    itemDiv.classList.add("item");
    itemDiv.innerHTML = `
      <h3>🧾 ${nome}</h3>
      <p>Venda por: <strong>${precoVenda} PO</strong></p>
      <div class="botoes">
        <button class="vender">💰 Vender</button>
      </div>
    `;

    // Evento de venda
    itemDiv.querySelector('.vender').addEventListener('click', () => {
      moedas += precoVenda;
      if (moedasDisplay) moedasDisplay.textContent = moedas;
      itemDiv.remove();
      alert(`Você vendeu ${nome} por ${precoVenda} PO!`);
    });

    inventarioContainer.appendChild(itemDiv);
  }

});
