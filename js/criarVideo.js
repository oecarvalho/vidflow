async function criarVideos(titulo, descricao, url, imagem) {
    const conexao = await fetch('http://localhost:3000/videos', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        titulo: titulo,
        descricao: `${descricao} mil visualizações`,
        url: url,
        imagem: imagem,
      }),
    });
  
    const conexaoConvertida = await conexao.json();
    return conexaoConvertida;
}

const formulario = document.querySelector('[data-formulario]');

async function criarVideo(evento) {
  evento.preventDefault();

  const imagem = document.querySelector('[data-imagem]').value;
  const url = document.querySelector('[data-url]').value;
  const titulo = document.querySelector('[data-titulo]').value;

  const descricao = Math.floor(Math.random() * 10).toString();

  await criarVideos(titulo, descricao, url, imagem);

  window.location.href = '../src/envioConcluido.html';
}

formulario.addEventListener('submit', (evento) => {
  criarVideo(evento);
});
