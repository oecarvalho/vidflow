const containerVideos = document.getElementById('containerVideos');

async function buscarVideos() {
  try {
    const videosTech = await fetch('http://localhost:3000/videos');
    const videos = await videosTech.json();

    videos.forEach((video) => {
      if (video.categoria == '') {
        throw new Error('Vídeo não tem categoria');
      }

      containerVideos.innerHTML += `
            <li class="flex flex-col justify-center items-center gap-4 mb-8 video">
                <iframe class='w-full' src="${video.url}" title="${video.title}" frameborder="0" allowfullscreen></iframe>
                <div class="w-full max-w-sm flex items-center gap-4">
                    <img src="${video.imagem}" alt="">
                    <p id="titulo-video" class="font-medium text-md">${video.titulo}</p>
                </div>
                <p class="text-sm text-gray-400">${video.descricao}</p>
                <p class="hidden categoria">${video.categoria}</p>
            </li>
            `;
    });
  } catch (error) {
    containerVideos.innerHTML = `<p> Houve um erro ao carregar os vídeos: ${error} </p>`;
  }
}

buscarVideos();

const barraPesquisa = document.getElementById('barraPesquisa');

barraPesquisa.addEventListener('input', buscarVideoPesquisa);

function buscarVideoPesquisa() {
  const videos = document.querySelectorAll('.video');

  if (barraPesquisa.value != '') {
    for (let video of videos) {
      let titulo = video
        .querySelector('#titulo-video')
        .textContent.toLowerCase();
      let valorFiltro = barraPesquisa.value.toLowerCase();

      if (!titulo.includes(valorFiltro)) {
        video.style.display = 'none';
      } else {
        video.style.display = 'block';
      }
    }
  } else {
    video.style.display = 'block';
  }
}

const botaoCategoria = document.querySelectorAll('.superior-item');

botaoCategoria.forEach((botao) => {
  let nomeCategoria = botao.getAttribute('name');
  botao.addEventListener('click', () => filtrarPorCategoria(nomeCategoria));
});

function filtrarPorCategoria(filtro) {
  const videos = document.querySelectorAll('.video');
  for (let video of videos) {
    let categoria = video
      .querySelector('.categoria')
      .textContent.toLocaleLowerCase();
    let valorFiltro = filtro.toLocaleLowerCase();

    if (!categoria.includes(valorFiltro) && valorFiltro != 'tudo') {
      video.style.display = 'none';
    } else {
      video.style.display = 'block';
    }
  }
}
