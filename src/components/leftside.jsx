import Alert from '@mui/material/Alert';

export function LeftSide({ textoInserido, handleRestringirTexto, handleCodificar, handleDecodificar, dark }) {
  return (
    <div className="container__left-side">
      <textarea
        value={textoInserido}
        onChange={(event) => handleRestringirTexto(event)}
        className="left-side__textEntry"
        type="text"
        placeholder="Digite aqui seu texto para codifica-lo."
      />
      <p className={dark ? 'p dark' : 'p'}>
        <Alert variant="filled" severity="info" className={dark ? 'p dark' : 'p'}>
          Apenas letras minúsculas e sem acento.
        </Alert>
      </p>
      <div>
        <button
          className={dark ? 'cripto dark' : 'cripto'}
          type="submit"
          disabled={!textoInserido}
          onClick={handleCodificar}
        >
          Criptografar
        </button>
        <button
          className={dark ? 'uncripto dark' : 'uncripto'}
          type="submit"
          disabled={!textoInserido}
          onClick={handleDecodificar}
        >
          Descriptografar
        </button>
      </div>
    </div>
  );
}
