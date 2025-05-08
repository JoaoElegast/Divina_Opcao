// Sistema de Loja e Inventário com persistência em localStorage
// Gerencia moedas, estoque da loja e inventário entre páginas

document.addEventListener('DOMContentLoaded', () => {
  // ----- Helpers de localStorage -----
  function loadState(key, defaultValue) {
    try {
      const stored = localStorage.getItem(key);
      return stored ? JSON.parse(stored) : defaultValue;
    } catch (e) {
      console.error('Erro ao ler localStorage', e);
      return defaultValue;
    }
  }

  function saveState(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.error('Erro ao salvar localStorage', e);
    }
  }

  // ----- Estado inicial -----
  let moedas = loadState('moedas', 100);
  let inventario = loadState('inventario', []);
  let estoqueLoja = loadState('estoqueLoja', null);

  // Itens fixos da loja com quantidade inicial
  const itensLojaPadrao = [
    { id: 'adaga', nome: 'Adaga', preco: 15, arquivo: 'adaga.html', quantidade: 5 },
    { id: 'escudo', nome: 'Escudo', preco: 25, arquivo: 'escudo.html', quantidade: 3 },
    { id: 'pocao_verde', nome: 'Poção Verde', preco: 10, arquivo: 'pocao_verde.html', quantidade: 10 },
    // ... demais itens com propriedade 'quantidade'
  ];

  // Se ainda não há estoque salvo, inicializa
  if (!estoqueLoja) {
    estoqueLoja = itensLojaPadrao;
    saveState('estoqueLoja', estoqueLoja);
  }

  // ----- Elementos DOM -----
  const moedasDisplay = document.getElementById('moedas');
  const lojaContainer = document.getElementById('itens-loja');
  const inventarioContainer = document.getElementById('inventario');

  // Atualiza display de moedas
  if (moedasDisplay) moedasDisplay.textContent = moedas;

  // ----- Renderização da Loja -----
  if (lojaContainer) {
    lojaContainer.innerHTML = ''; // limpa antes
    estoqueLoja.forEach(item => {
      const card = document.createElement('div');
      card.classList.add('item');
      card.innerHTML = `
        <h3>🧾 ${item.nome}</h3>
        <p>Preço: <strong>${item.preco} PO</strong></p>
        <p>Em estoque: <strong>${item.quantidade}</strong></p>
        <div class="botoes">
          <button class="ver">🔍 Ver</button>
          <button class="comprar" ${item.quantidade === 0 ? 'disabled' : ''}>🛒 Comprar</button>
        </div>
      `;
      const [btnVer, btnComprar] = card.querySelectorAll('button');
      btnVer.addEventListener('click', () => usarItem(item.arquivo));
      btnComprar.addEventListener('click', () => comprarItem(item.id));
      lojaContainer.appendChild(card);
    });
  }

  // ----- Renderização do Inventário -----
  function renderInventario() {
    if (!inventarioContainer) return;
    inventarioContainer.innerHTML = '';
    inventario.forEach((item, idx) => {
      const div = document.createElement('div');
      div.classList.add('item');
      div.innerHTML = `
        <h3>🧾 ${item.nome}</h3>
        <p>Venda por: <strong>${item.precoVenda} PO</strong></p>
        <div class="botoes">
          <button class="vender">💰 Vender</button>
        </div>
      `;
      div.querySelector('.vender').addEventListener('click', () => venderItem(idx));
      inventarioContainer.appendChild(div);
    });
  }
  renderInventario();

  // ----- Ações -----
  window.usarItem = function(arquivo) {
    window.open(`html_itens_rpg/${arquivo}`, '_blank');
  };

  window.comprarItem = function(itemId) {
    const item = estoqueLoja.find(i => i.id === itemId);
    if (!item || item.quantidade === 0) return;
    if (moedas < item.preco) {
      alert('Você não tem ouro suficiente!');
      return;
    }
    // Atualiza estado
    moedas -= item.preco;
    item.quantidade -= 1;
    inventario.push({ nome: item.nome, precoVenda: Math.floor(item.preco/2) });

    // Persiste
    saveState('moedas', moedas);
    saveState('estoqueLoja', estoqueLoja);
    saveState('inventario', inventario);

    // Atualiza UI
    if (moedasDisplay) moedasDisplay.textContent = moedas;
    if (lojaContainer) {
      // re-renderizar loja para atualizar estoque e botões
      estoqueLoja.forEach((it, idx) => {
        const card = lojaContainer.children[idx];
        const qtdP = card.querySelector('p strong');
        qtdP.textContent = it.quantidade;
        const btnComp = card.querySelector('.comprar');
        btnComp.disabled = it.quantidade === 0;
      });
    }
    renderInventario();
    alert(`Você comprou ${item.nome} por ${item.preco} PO!`);
  };

  function venderItem(idx) {
    const item = inventario[idx];
    moedas += item.precoVenda;
    // Remove do inventário
    inventario.splice(idx, 1);
    // Persiste
    saveState('moedas', moedas);
    saveState('inventario', inventario);
    if (moedasDisplay) moedasDisplay.textContent = moedas;
    renderInventario();
    alert(`Você vendeu ${item.nome} por ${item.precoVenda} PO!`);
  }

});
