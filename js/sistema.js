(function(){
  function load(key, def){ try{ return JSON.parse(localStorage.getItem(key))||def }catch{return def} }
  function save(key,val){ localStorage.setItem(key,JSON.stringify(val)); }

  let moedas = load('moedas', 18);
  let inventario = load('inventario', []);
  let estoque = load('estoque', [
    { id:'adaga', nome:'Adaga', preco:15, descricao:'1d4+2 de dano cortante', qt:5 },
    { id:'escudo', nome:'Escudo', preco:25, descricao:'Aumenta defesa em 5 pontos', qt:3 },
    { id:'pocao_verde', nome:'Poção Verde', preco:10, descricao:'Restaura 10 HP', qt:10 },
    { id:'machado', nome:'Machado', preco:20, descricao:'1d6+3 de dano cortante', qt:7 },
    { id:'espada', nome:'Espada Longa', preco:40, descricao:'1d8+4 de dano cortante', qt:4 },
    { id:'elmo', nome:'Elmo de Ferro', preco:30, descricao:'Aumenta resistência em 3 pontos', qt:6 },
    { id:'capa', nome:'Capa Mágica', preco:35, descricao:'Dá invisibilidade por 10 minutos', qt:2 },
    { id:'poção_rara', nome:'Poção Rara', preco:50, descricao:'Restaura 30 HP', qt:3 },
    { id:'corda', nome:'Corda de 10 metros', preco:5, descricao:'Usada para escalar ou amarrar', qt:8 },
    { id:'arco', nome:'Arco Longo', preco:25, descricao:'1d6 de dano perfurante', qt:4 },
    { id:'flecha', nome:'Flecha', preco:2, descricao:'Usada no arco', qt:100 },
    { id:'armadura', nome:'Armadura de Placas', preco:80, descricao:'Reduz dano físico em 5', qt:2 },
    { id:'lanterna', nome:'Lanterna', preco:10, descricao:'Ilumina áreas escuras', qt:5 },
    { id:'ring_of_power', nome:'Anel do Poder', preco:100, descricao:'Aumenta todas as estatísticas em 1 ponto', qt:1 },
    { id:'bag_of_holding', nome:'Saco de Armazenamento', preco:120, descricao:'Aumenta capacidade de carga', qt:1 }
  ]);

  const mon = document.getElementById('moedas');
  const loja = document.getElementById('itens-loja');
  const inv = document.getElementById('inventario'); // <- Certifique-se de ter esse elemento no HTML
  mon.textContent = moedas;

  function renderLoja(){
    loja.innerHTML = '';
    estoque.forEach(item=>{
      const d = document.createElement('div');
      d.className = 'item';
      d.innerHTML = `
        <h3>${item.nome}</h3>
        <p>Preço: <strong>${item.preco} PO</strong></p>
        <p>${item.descricao}</p>
        <p>Em estoque: <strong>${item.qt}</strong></p>
        <button ${item.qt === 0 ? 'disabled' : ''} data-id="${item.id}">🛒 Comprar</button>
      `;
      d.querySelector('button').onclick = () => comprar(item.id);
      loja.appendChild(d);
    });
    renderInventario();
  }

  function renderInventario(){
    if (!inv) return;
    inv.innerHTML = '';
    inventario.forEach((item, index)=>{
      const d = document.createElement('div');
      d.className = 'item';
      d.innerHTML = `
        <h4>${item.nome}</h4>
        <p>${item.descricao}</p>
        <button onclick="usarItem(${index})">🎲 Usar item</button>
      `;
      inv.appendChild(d);
    });
  }

  function comprar(id){
    const it = estoque.find(x => x.id === id);
    if (!it || it.qt === 0 || moedas < it.preco) return alert('Não é possível comprar.');

    moedas -= it.preco;
    it.qt--;
    inventario.push({ nome: it.nome, precoVenda: Math.floor(it.preco / 2), descricao: it.descricao });

    save('moedas', moedas);
    save('estoque', estoque);
    save('inventario', inventario);

    mon.textContent = moedas;
    renderLoja();

    alert(`Você comprou ${it.nome} por ${it.preco} PO!`);
  }

  window.usarItem = function(index){
    const item = inventario[index];
    if (!item) return alert('Item não encontrado.');

    let resultado = '';

    // Detecta rolagem no formato "1dX+Y"
    const match = item.descricao.match(/1d(\d+)(\+(\d+))?/);
    if (match){
      const faces = parseInt(match[1]);
      const bonus = parseInt(match[3]) || 0;
      const rolagem = Math.floor(Math.random() * faces) + 1 + bonus;
      resultado = `Rolagem com ${item.nome}: ${rolagem}`;
    } else {
      resultado = `Você usou ${item.nome}.`;
    }

    alert(resultado);
  }

  renderLoja();
})();
