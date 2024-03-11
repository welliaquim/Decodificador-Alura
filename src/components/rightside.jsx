import interrogacao from '../images/interrogacao.png';

export function RightSide({ textoModificado, handleCopiarTexto, setTextoInserido, setTextoModificado, dark }) {
  return (
    <>
      {textoModificado === '' ? (
        <div className="right-side">
          <img src={interrogacao} alt="ponto de interrogação" />
          <h3>Nenhuma mensagem encontrada...</h3>
          <p>Digite um texto que você deseja criptografar ou descriptografar.</p>
        </div>
      ) : (
        <div className="right-side2">
          <h3>{textoModificado}</h3>
          <div>
            <button className={dark ? 'copy dark' : 'copy'} onClick={handleCopiarTexto}>
              Copiar
            </button>
            <button
              className={dark ? 'reset dark' : 'reset'}
              onClick={() => {
                setTextoInserido('');
                setTextoModificado('');
              }}
            >
              Voltar ao início
            </button>
          </div>
        </div>
      )}
    </>
  );
}
