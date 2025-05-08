const loja = [
  { nome: "Adaga", preco: 10, img: "adaga.png" },
  { nome: "Azagaia", preco: 12, img: "azagaia.png" },
  { nome: "Lança", preco: 15, img: "lanca.png" },
  { nome: "Bordão", preco: 8, img: "bordao.png" },
  { nome: "Armadura de Couro", preco: 50, img: "armadura_couro.png" },
  { nome: "Armadura Acolchoada", preco: 40, img: "armadura_acolchoada.png" },
  { nome: "Mochila", preco: 5, img: "mochila.png" },
  { nome: "Saco de Dormir", preco: 4, img: "saco_dormir.png" },
  { nome: "Poção de Cura", preco: 20, img: "pocao_cura.png" },
  { nome: "Poção de Magia", preco: 25, img: "pocao_magia.png" },
];

let moedas = localStorage.getItem("moedas") ? parseInt(localStorage.getItem("moedas")) : 100;
let inventario = JSON.parse(localStorage.getItem("inventario")) || [];

function atualizarMoedas() {
  document.getElementById("moedas")?.innerText = moedas;
  localStorage.setItem("moedas", moedas);
}

function salvarInventario() {
  localStorage.setItem("inventario", JSON.stringify(inventario));
}

function carregarLoja() {
  const lojaDiv = document.getElementById("itens-loja");
  loja.forEach((item, i) => {
    const el = document.createElement("div");
    el.classList.add("item");
    el.innerHTML = `
      <img src="img/${item.img}" alt="${item.nome}" />
      <strong>${item.nome}</strong>
      <span>${item.preco} PO</span><br>
      <button onclick="comprar(${i})">Comprar</button>
    `;
    lojaDiv.appendChild(el);
  });
  atualizarMoedas();
}

function comprar(index) {
  const item = loja[index];
  if (moedas >= item.preco) {
    moedas -= item.preco;
    inventario.push(item);
    salvarInventario();
    atualizarMoedas();
    alert(`${item.nome} foi comprado!`);
  } else {
    alert("Você não tem PO suficiente!");
  }
}

function carregarInventario() {
  const invDiv = document.getElementById("inventario");
  if (!inventario.length) {
    invDiv.innerHTML = "<p>Inventário vazio.</p>";
    return;
  }
  inventario.forEach(item => {
    const el = document.createElement("div");
    el.classList.add("item");
    el.innerHTML = `
      <img src="img/${item.img}" alt="${item.nome}" />
      <strong>${item.nome}</strong>
    `;
    invDiv.appendChild(el);
  });
}

if (document.getElementById("itens-loja")) carregarLoja();
if (document.getElementById("inventario")) carregarInventario();
