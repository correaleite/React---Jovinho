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
    <div className="flex items-center gap-1.5">
      <div className="flex">
        {Array.from({ length: estrelasCheias }).map((_, i) => (
          <span key={`cheia-${i}`} className="text-star-size text-star">★</span>
        ))}

        {temMeiaEstrela && (
          <span className="text-star-size text-star opacity-50">★</span>
        )}

        {Array.from({ length: estrelasVazias }).map((_, i) => (
          <span key={`vazia-${i}`} className="text-star-size text-star-empty">☆</span>
        ))}
      </div>

      <span className="font-bold">{media.toFixed(1)}</span>
      <span className="text-total text-gray-light">({notas.length} avaliações)</span>
    </div>
  )
}

export default AvaliacaoEstrelas;