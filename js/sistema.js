// Lista de itens padrão da loja (exemplo com categorias)
const itensLojaPadrao = [
  // Armas Simples
  { id: 'espada_longa', nome: 'Espada Longa', preco: 50, arquivo: 'espada_longa.html', quantidade: 5 },
  { id: 'machado_guerra', nome: 'Machado de Guerra', preco: 60, arquivo: 'machado_guerra.html', quantidade: 3 },
  { id: 'arco_curto', nome: 'Arco Curto', preco: 40, arquivo: 'arco_curto.html', quantidade: 4 },

  // Armaduras Leves
  { id: 'armadura_couro', nome: 'Armadura de Couro', preco: 30, arquivo: 'armadura_couro.html', quantidade: 4 },
  { id: 'armadura_oculta', nome: 'Armadura Oculta', preco: 55, arquivo: 'armadura_oculta.html', quantidade: 2 },

  // Equipamentos de Aventura
  { id: 'corda_15m', nome: 'Corda de 15m', preco: 5, arquivo: 'corda_15m.html', quantidade: 10 },
  { id: 'tocha', nome: 'Tocha', preco: 1, arquivo: 'tocha.html', quantidade: 20 },
  { id: 'kit_explorador', nome: 'Kit do Explorador', preco: 25, arquivo: 'kit_explorador.html', quantidade: 5 },

  // Itens Consumíveis
  { id: 'pocao_cura', nome: 'Poção de Cura', preco: 20, arquivo: 'pocao_cura.html', quantidade: 10 },
  { id: 'pocao_forca', nome: 'Poção de Força', preco: 30, arquivo: 'pocao_forca.html', quantidade: 5 },
  { id: 'pocao_velocidade', nome: 'Poção de Velocidade', preco: 35, arquivo: 'pocao_velocidade.html', quantidade: 3 },

  // Itens Mágicos (Raros)
  { id: 'anel_protecao', nome: 'Anel de Proteção', preco: 80, arquivo: 'anel_protecao.html', quantidade: 1 },
  { id: 'cajado_arcano', nome: 'Cajado Arcano', preco: 100, arquivo: 'cajado_arcano.html', quantidade: 1 },
  { id: 'botas_levitacao', nome: 'Botas de Levitação', preco: 120, arquivo: 'botas_levitacao.html', quantidade: 1 }
];

// Inicialização segura do estoque
let estoqueLoja = loadState('estoqueLoja', null);
if (!estoqueLoja) {
  estoqueLoja = itensLojaPadrao;
  saveState('estoqueLoja', estoqueLoja);
}
