// Dados das notícias (mantidos conforme seu original)
const dados = [
  {
    "id": 1,
    "titulo": "Prefeitura Lança Novo Plano de Mobilidade Urbana",
    "descricao": "Novo plano visa melhorar o transporte público e reduzir o trânsito na cidade.",
    "conteudo": "A Prefeitura apresentou nesta segunda-feira um novo plano de mobilidade urbana que inclui a criação de corredores exclusivos de ônibus, ciclovias e a requalificação de vias principais. O projeto será implementado ao longo dos próximos dois anos.",
    "categoria": "Cidades",
    "autor": "Joana Ribeiro",
    "data": "2025-03-30",
    "imagem": "img/mobilidade.png"
  },
  {
    "id": 2,
    "titulo": "Tecnologia 6G Está em Desenvolvimento",
    "descricao": "Pesquisadores anunciam avanços na próxima geração de redes móveis.",
    "conteudo": "Universidades e empresas de telecomunicação já estão testando tecnologias que poderão compor a infraestrutura do 6G. A expectativa é que a nova geração seja 100 vezes mais rápida que o 5G e amplie a integração entre dispositivos inteligentes.",
    "categoria": "Tecnologia",
    "autor": "Carlos Mendes",
    "data": "2025-03-28",
    "imagem": "img/tecnologia_6g.png"
  },
  {
    "id": 3,
    "titulo": "Festival de Música Reúne Mais de 50 Mil Pessoas",
    "descricao": "Evento cultural movimentou o final de semana com atrações nacionais e internacionais.",
    "conteudo": "Durante três dias de programação, o festival contou com a participação de mais de 40 artistas e promoveu atividades culturais e gastronômicas em paralelo. A prefeitura estima um impacto positivo no turismo local.",
    "categoria": "Cultura",
    "autor": "Ana Clara Silva",
    "data": "2025-03-27",
    "imagem": "img/festival_musica.png"
  }
];

function mostrarNoticias() {
  const container = document.getElementById('noticia');

  container.innerHTML = dados.map(noticia => `
    <div class="noticias">
      <h2>${noticia.titulo}</h2>
      <img src="${noticia.imagem}">    
      <p>${noticia.descricao}</p>
      <small>Publicado em: ${noticia.data}</small>
      <a href="detalhes.html?id=${noticia.id}">Leia mais</a>
    </div>
  `).join('');
}

function mostrarDetalhes() {
  const container = document.getElementById('noticia-detalhada');

  const id = new URLSearchParams(window.location.search).get('id');
  const noticia = dados.find(n => n.id == id);

  container.innerHTML = noticia ? `
    <h1>${noticia.titulo}</h1>
    <p><strong>Categoria:</strong> ${noticia.categoria}</p>
    <p><strong>Autor:</strong> ${noticia.autor}</p>
    <p><strong>Data:</strong> ${noticia.data}</p>
    <img src="${noticia.imagem}" alt="${noticia.titulo}">
    <p>${noticia.conteudo}</p>
    <a href="atividade.html">Voltar</a>
  ` : `
    <p>Notícia não encontrada</p>
    <a href="atividade.html">Voltar</a>
  `;
}

document.addEventListener('DOMContentLoaded', () => {
  if (window.location.pathname.includes('detalhes.html')) {
    mostrarDetalhes();
  } else {
    mostrarNoticias();
  }
});