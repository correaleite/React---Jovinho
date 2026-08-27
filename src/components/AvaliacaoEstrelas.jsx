
function AvaliacaoEstrelas({ notas }) {

  function mediaAvaliacoes(notas) {
    const soma = notas.reduce((acc, nota) => acc + nota, 0);
    const media = soma / notas.length;
    return Math.round(media * 10) / 10;
  }

  const media = mediaAvaliacoes(notas);
  const estrelasCheias = Math.floor(media);
  const temMeiaEstrela = media % 1 >= 0.5;           
  const estrelasVazias = 5 - estrelasCheias - (temMeiaEstrela ? 1 : 0);

  return (
    <div className="avaliacao-estrelas">
      <div className="estrelas">
        {}
        {Array.from({ length: estrelasCheias }).map((_, i) => (
          <span key={`cheia-${i}`} className="estrela cheia">★</span>
        ))}

        {}
        {temMeiaEstrela && <span className="estrela meia">★</span>}

        {}
        {Array.from({ length: estrelasVazias }).map((_, i) => (
          <span key={`vazia-${i}`} className="estrela vazia">☆</span>
        ))}
      </div>

      <span className="nota-numero">{media.toFixed(1)}</span>
      <span className="total-avaliacoes">({notas.length} avaliações)</span>
    </div>
  );
}

export default AvaliacaoEstrelas;