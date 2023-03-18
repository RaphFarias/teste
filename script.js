const parametros = new URLSearchParams(location.search);

function ativarProduto(parametro) {
  const elemento = document.getElementById(parametro);
  elemento.classList.add('consulta-escolhida')
}

parametros.forEach(ativarProduto);
